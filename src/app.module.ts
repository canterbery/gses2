import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseProvider } from './database.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env.dev', './.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, databaseProvider],
  exports: [databaseProvider],
})
export class AppModule {}
