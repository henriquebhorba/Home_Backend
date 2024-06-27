// src/tasks/dto/update-task.dto.ts
export class UpdateTaskDto {
  readonly description?: string;
  readonly deadline?: Date;
  readonly priority?: string;
  readonly status?: string;
}
