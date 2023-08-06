import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type WorkersDocument = HydratedDocument<Workers>;

@Schema({ timestamps: true })
export class Workers {
  @Prop()
	first_name:string;

	@Prop()
	last_name:string;

	@Prop()
	image:string;

	@Prop()
	birth:string;

	@Prop()
	gender:string;

	@Prop()
	address:string;

	@Prop()
	job:string;

	@Prop()
	experience:string;

	@Prop()
	work_day:string;

	@Prop()
	start_work:string;

	@Prop()
	end_work:string;

	;
}

export const WorkersSchema = SchemaFactory.createForClass(Workers);
