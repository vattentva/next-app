import { UserDTO } from '../dtos/UserDTO';
import { IUserRepository } from '@/infrastructure/repositories/IUserRepository';

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<UserDTO | null> {
    const user = await this.userRepository.findById(id);
    return user ? new UserDTO(user) : null;
  }
}

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  
  async execute(id: string): Promise<string | null> {
    return await this.userRepository.delete(id);
  }
}

