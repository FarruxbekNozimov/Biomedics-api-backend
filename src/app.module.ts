import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AdminModule } from './admin/admin.module';
import { DrugsModule } from './drugs/drugs.module';
import { WorkersModule } from './workers/workers.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    DrugsModule,
    WorkersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
