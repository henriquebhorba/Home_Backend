// src/users/interfaces/user.interface.ts
import { Document } from 'mongoose';

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    comparePassword(attempt: string): Promise<boolean>;
}
