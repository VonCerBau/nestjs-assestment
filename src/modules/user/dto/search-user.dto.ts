import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { User } from "../schemas/user.schema";

export class SearchUserDto extends User {
  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  username: string;
}
