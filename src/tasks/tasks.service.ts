// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find({ deleted_at: null }).exec();
    }

    async findOneById(id: string): Promise<Task> {
        const task = await this.taskModel.findOne({ _id: id, deleted_at: null }).exec();
        if (!task) {
            throw new NotFoundException(`Task #${id} not found`);
        }
        return task;
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const existingTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
        if (!existingTask) {
            throw new NotFoundException(`Task #${id} not found`);
        }
        return existingTask;
    }

    async remove(id: string): Promise<any> {
        const deletedTask = await this.taskModel.findByIdAndUpdate(id, { deleted_at: new Date() }, { new: true }).exec();
        if (!deletedTask) {
            throw new NotFoundException(`Task #${id} not found`);
        }
        return deletedTask;
    }
}
