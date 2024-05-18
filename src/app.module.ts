import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseProvider } from './database.provider';
import { RateModule } from './rate/rate.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env.dev', './.env'],
    }),
    RateModule,
    SubscriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService, databaseProvider],
  exports: [databaseProvider],
})
export class AppModule {}
