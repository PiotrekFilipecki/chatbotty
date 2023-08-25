import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from 'src/messages/messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {

    }

    @Post()
    async createMessage(@Body() data: { message: string }) {
        return this.messagesService.createMessage(data.message)
    }
}
