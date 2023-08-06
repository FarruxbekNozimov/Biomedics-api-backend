import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkersDto {
  @ApiProperty({ example: "Toshmat" })
	first_name: string;

	@ApiProperty({ example: "Eshmatov" })
	last_name: string;

	@ApiProperty({ example: "Eshmatov" })
	image: string;

	@ApiProperty({ example: "2000" })
	birth: string;

	@ApiProperty({ example: "male" })
	gender: string;

	@ApiProperty({ example: "Andijon" })
	address: string;

	@ApiProperty({ example: "Manager" })
	job: string;

	@ApiProperty({ example: "12+" })
	experience: string;

	@ApiProperty({ example: "Du, Se, Chor" })
	work_day: string;

	@ApiProperty({ example: "8:00" })
	start_work: string;

	@ApiProperty({ example: "18:00" })
	end_work: string;

	
}
