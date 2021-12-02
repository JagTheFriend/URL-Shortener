import { model, Schema, Document } from 'mongoose';
import { App } from '@interfaces/app.interface';
import { generate } from 'shortid';

const userSchema: Schema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    unique: true,
    default: generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const userModel = model<App & Document>('App', userSchema);

export default userModel;
