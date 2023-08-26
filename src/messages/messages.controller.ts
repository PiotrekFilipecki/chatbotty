import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from 'src/messages/messages.service';
import { OpenaiService } from './openai/openai.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly openaiService: OpenaiService,
  ) {}

  @Post()
  async createMessage(@Body() data: { message: string }) {
    await this.messagesService.createMessage(data.message);
    return this.openaiService.createCompletion(data.message);
  }
}
