import OpenAI from 'openai';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const openai = new OpenAI();

export async function POST(req: NextRequest) {
  const { goal } = await req.json();

  if (!goal) {
    return new Response('Goal is required', { status: 400 });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-5-nano', // You can change this if needed
      stream: true,
      messages: [
        { role: 'system', content: 'You are a highly qualified personal trainer.' },
        { role: 'user', content: `Generate a workout plan for this goal: ${goal}` },
      ],
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }

        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error(error);
    return new Response('Error generating response', { status: 500 });
  }
}
