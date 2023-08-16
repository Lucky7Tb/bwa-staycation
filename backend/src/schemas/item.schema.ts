import { Image } from './image.schema';
import { Feature } from './feature.schema';
import { Activity } from './activity.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: Number })
  price: string;

  @Prop({ required: true, type: String, default: 'Indonesia' })
  country: string;

  @Prop({ required: true, type: String })
  city: string;

  @Prop({ required: false, type: Boolean, default: false })
  isPopular?: boolean;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Image' })
  images: Image[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Feature' })
  features: Feature[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' })
  activities: Activity[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);
