import { UserEntity } from '@/domain/entities/UserEntity';

export interface IUserRepository {
  findById(id: string): Promise<UserEntity | null>;
  delete(id: string): Promise<string | null>;
  // findAll(): Promise<User[]>;
}
