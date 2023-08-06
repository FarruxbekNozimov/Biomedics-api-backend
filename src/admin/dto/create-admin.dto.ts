import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: "admin" })
	login: string;

	@ApiProperty({ example: "admin" })
	password: string;

	@ApiProperty({ example: "" })
	token: string;

	
}
