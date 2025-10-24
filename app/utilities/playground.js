import OpenAI from "openai";

const OPENAI_MODELS = {
  GPT5NANO: "gpt-5-nano", //most cost efficient, less reasoning, great for simpler tasks
  o4MINI: "o4-mini", //Fast, cost-efficient reasoning model
  o3: "o3", //Smartest reasoning model for complex tasks
};

const OPENAPI_API_KEY = process.env.OPENAPI_API_KEY;
const client = new OpenAI({
  apiKey: OPENAPI_API_KEY,
});

// For a simple response
// ---------------------

// const reposnse = await client.responses.create({
//   model: OPENAI_MODELS.GPT5NANO,
//   input:
//     'Tell me a joke that involves travel. Do not cut off the sentence, a sentence has to be complete.',
// });

// console.log(reposnse);

// For a stream response
// ---------------------

const stream = await client.responses.create({
  model: OPENAI_MODELS.GPT5NANO,
  input: "Tell me 3 interesting facts about Greece.",
  stream: true,
});

for await (const event of stream) {
  if (event.delta) {
    //console.log(event.delta);
    process.stdout.write(event.delta);
  }
}
