import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactUsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  company: string;
  @ApiProperty()
  // @IsNotEmpty()
  @IsString()
  phone: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subject: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  service: string;
}
