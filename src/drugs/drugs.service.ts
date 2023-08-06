import { Injectable } from '@nestjs/common';
import { CreateDrugsDto } from './dto/create-drugs.dto';
import { UpdateDrugsDto } from './dto/update-drugs.dto';
import { Drugs, DrugsDocument } from './schemas/drugs.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DrugsService {
  constructor(
    @InjectModel(Drugs.name)
    private orderModel: Model<DrugsDocument>,
  ) {}

  async create(createDrugsDto: CreateDrugsDto) {
    const res = await new this.orderModel(createDrugsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateDrugsDto: UpdateDrugsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateDrugsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
