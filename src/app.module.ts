import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://aungmyatmoedev11:amm2020@@nestjs-academind-test.u1wp1wu.mongodb.net/?retryWrites=true&w=majority&appName=nestjs-academind-test'
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
