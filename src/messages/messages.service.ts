import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
    constructor(private readonly prisma: PrismaService) {

    }

    async createMessage(message: string) {
        return this.prisma.message.create({
            data: {
                message,
            },
        });
    }
}
