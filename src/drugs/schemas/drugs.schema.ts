import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DrugsDocument = HydratedDocument<Drugs>;

@Schema({ timestamps: true })
export class Drugs {
  @Prop()
	name:string;

	@Prop()
	image:string;

	@Prop()
	instruction:string;

	;
}

export const DrugsSchema = SchemaFactory.createForClass(Drugs);
