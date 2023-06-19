import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './user/user.module';
import environment from 'tools/environment/environment';

@Module({
  imports: [UserModule , MongooseModule.forRoot(environment.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
