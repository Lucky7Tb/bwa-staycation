import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema()
export class Image {
  @Prop({ required: true, type: String })
  imageUrl: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
