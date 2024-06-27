// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        console.log('Create Task DTO:', createTaskDto); // Adicione este log para verificar o payload
        return this.tasksService.create(createTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.tasksService.findOneById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.tasksService.remove(id);
    }
}
