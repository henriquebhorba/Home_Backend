// src/tasks/schemas/task.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    deadline: Date;

    @Prop({ required: true })
    priority: string;

    @Prop({ default: 'to-do' })
    status: string;

    @Prop({ required: true }) // Nome do usuário que criou a tarefa
    user: string;

    @Prop({ required: true }) // Nome do assignee
    assignee: string;

    @Prop({ default: null })
    deleted_at: Date | null;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
