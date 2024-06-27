// src/tasks/dto/create-task.dto.ts

export class CreateTaskDto {
  readonly description: string;

  readonly deadline: Date;

  readonly priority: string;

  readonly user: string;

  readonly assignee: string;
}
