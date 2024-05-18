import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SubscribeDto {
  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'email field',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
