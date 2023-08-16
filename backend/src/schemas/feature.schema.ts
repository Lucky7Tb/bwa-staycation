import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FeatureDocument = HydratedDocument<Feature>;

@Schema()
export class Feature {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number })
  qty: number;

  @Prop({ required: true, type: String })
  imageUrl: string;
}

export const FeatureSchema = SchemaFactory.createForClass(Feature);
