import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BankDocument = HydratedDocument<Bank>;

@Schema()
export class Bank {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  accountNumber: string;

  @Prop({ required: true, type: String })
  accountName: string;
}

export const BankSchema = SchemaFactory.createForClass(Bank);
