import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { DrugsService } from './drugs.service';
import { CreateDrugsDto } from './dto/create-drugs.dto';
import { UpdateDrugsDto } from './dto/update-drugs.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('Drugs')
@Controller('drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create drugs' })
  @Post()
  create(@Body() createDrugsDto: CreateDrugsDto) {
    return this.drugsService.create(createDrugsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all drugs' })
  @Get()
  findAll(@Query() query: any) {
    return this.drugsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one drugs' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drugsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update drugs by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDrugsDto: UpdateDrugsDto) {
    return this.drugsService.update(id, updateDrugsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete drugs by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drugsService.remove(id);
  }
}
