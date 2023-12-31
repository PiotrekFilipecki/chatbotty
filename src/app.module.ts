import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MessageModule } from './message/message.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { OpenaiService } from './messages/openai/openai.service';

@Module({
  imports: [PrismaModule, MessageModule],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService, OpenaiService],
})
export class AppModule {}
