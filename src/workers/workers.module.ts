import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workers, WorkersSchema } from './schemas/workers.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Workers.name, schema: WorkersSchema }]),
    JwtModule,
  ],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
