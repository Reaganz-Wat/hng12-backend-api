import { IsEmail, IsString, IsUrl } from 'class-validator';

export class MessageDto {
  @IsEmail()
  email: string;

  @IsString()
  current_datetime: string;

  @IsUrl()
  github_url: string;
}
