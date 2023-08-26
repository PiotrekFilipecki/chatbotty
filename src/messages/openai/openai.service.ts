import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
  private CONTEXT_INSTRUCTION = 'Based on this context:';
  private INSTRUCTION = `Answer the question below as truthfully as you can, if you don't know the answer, say you don't know in a sarcastic way otherwise, just answer.`;
  private openai;

  constructor() {
    const configuration = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = configuration;
  }

  async createCompletion(prompt) {
    const completion = await this.openai.completions.create({
      model: 'text-davinci-003',
      prompt: `${this.CONTEXT_INSTRUCTION}\n\n\nContext:  \n\n\n${this.INSTRUCTION} \n\n\n ${prompt}`,
      max_tokens: 250,
      temperature: 0.2,
    });

    return completion?.data.choices?.[0]?.text;
  }
}
