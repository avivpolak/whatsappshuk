import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
//import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { IBaseService } from './IBase.service';
import { BaseEntity } from './base.entity';

export class BaseController<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  //@ApiResponse({ status: 200, description: 'Ok'})
  async findAll(): Promise<T[]> {
    return this.IBaseService.getAll();
  }

  @Get(':id')
  //@ApiResponse({ status: 200, description: 'Entity retrieved successfully.'})
  //@ApiResponse({ status: 404, description: 'Entity does not exist'})
  async findById(@Param('id') id: number): Promise<T> {
    return this.IBaseService.get(id);
  }

  //@Post()
  //@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  //@ApiResponse({ status: 403, description: 'Forbidden.'})
  //@ApiResponse({ status: 400, description: 'Bad Request.'})
  // async create(@Body() entity: T): Promise<number> {
  // 	Logger.log("in base controller")
  // 	return this.IBaseService.create(entity);
  // }

  @Delete(':id')
  //@ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
  //@ApiResponse({ status: 400, description: 'Bad Request.'})
  async delete(@Param('id') id: number) {
    this.IBaseService.delete(id);
  }

  // @Put()
  // //@ApiResponse({ status: 400, description: 'Bad Request.'})
  // // @ApiResponse({ status: 200, description: 'Entity deleted successfully.'})
  // async update(@Body() entity: T): Promise<T> {
  //   return this.IBaseService.update(entity);
  // }
}
