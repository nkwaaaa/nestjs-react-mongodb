import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
class Task {
  @Prop({
    unique: true,
    require: true,
    trim: true,
  })
  title: string;

  @Prop()
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskScheme = SchemaFactory.createForClass(Task);
