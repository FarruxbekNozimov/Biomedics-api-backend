import { ApiProperty } from '@nestjs/swagger';

export class CreateDrugsDto {
  @ApiProperty({ example: "Greenfer" })
	name: string;

	@ApiProperty({ example: "image.png" })
	image: string;

	@ApiProperty({ example: "" })
	instruction: string;

	
}
