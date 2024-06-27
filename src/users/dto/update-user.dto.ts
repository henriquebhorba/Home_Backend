// src/users/dto/update-user.dto.ts
export class UpdateUserDto {
  readonly username?: string;
  readonly email?: string;
    readonly password?: string;
    readonly adminUuid?: string; // Campo opcional para o UUID do administrador
}
