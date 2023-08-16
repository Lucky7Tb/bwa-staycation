import { Bank } from './bank.schema';
import { Member } from './member.schema';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ required: true, type: Date })
  bookingStartDate: Date;

  @Prop({ required: true, type: Date })
  bookingStartEndDate: Date;

  @Prop(
    raw({
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
      price: { type: Number, required: true },
      night: { type: Number, required: true },
    })
  )
  item: Record<string, any>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Member' })
  member: Member;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' })
  bank: Bank;

  @Prop({ required: true, type: String })
  proofPayment: string;

  @Prop({ required: true, type: String })
  bankFrom: string;

  @Prop({ required: true, type: String })
  accountHolder: string;

  @Prop({ required: true, type: String })
  imageUrl: string;

  @Prop({ required: true, type: String })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
