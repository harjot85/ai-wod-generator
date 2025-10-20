import { get_encoding } from 'tiktoken';

const encoding = get_encoding('cl100k_base');
const tokens = encoding.encode(
  'If I send this prompt to the LLM, how many tokens will it cost? What IDs these tokens will map to?'
);

console.log('Tokens:', tokens);
