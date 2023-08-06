import { Module } from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { DrugsController } from './drugs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Drugs, DrugsSchema } from './schemas/drugs.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drugs.name, schema: DrugsSchema }]),
    JwtModule,
  ],
  controllers: [DrugsController],
  providers: [DrugsService],
})
export class DrugsModule {}
