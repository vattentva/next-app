import { UserEntity } from '@/domain/entities/UserEntity';

export class UserDTO {
  constructor(private user: UserEntity) {}

  toJSON() {
    return {
      id: this.user.getId(),
      name: this.user.getName(),
      email: this.user.getEmail(),
    };
  }
}
