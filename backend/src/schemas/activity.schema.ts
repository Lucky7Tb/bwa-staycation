import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  type: string;

  @Prop({ required: true, type: String })
  imageUrl: string;

  @Prop({ required: true, type: Boolean })
  isPopular: boolean;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
