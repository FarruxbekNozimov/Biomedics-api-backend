import { Injectable } from '@nestjs/common';
import { CreateWorkersDto } from './dto/create-workers.dto';
import { UpdateWorkersDto } from './dto/update-workers.dto';
import { Workers, WorkersDocument } from './schemas/workers.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Workers.name)
    private orderModel: Model<WorkersDocument>,
  ) {}

  async create(createWorkersDto: CreateWorkersDto) {
    const res = await new this.orderModel(createWorkersDto).save();
    return res;
  }

  async findAll() {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateWorkersDto: UpdateWorkersDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateWorkersDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
