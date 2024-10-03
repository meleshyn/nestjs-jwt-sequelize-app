import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  phone: string;

  @Exclude()
  password?: string;
}
