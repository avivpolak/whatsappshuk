import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  create(@Body() createApiDto: CreateApiDto) {
    return this.apiService.create(createApiDto);
  }

  @Get('DistributionSessionsList')
  getDistributionSessionsList() {
    return this.apiService.getDistributionSessionsList();
  }

  @Get('sellers-list/:id')
  //@Get(':DistributionSessionsListID')
  getSellersList(@Param('id') id: number) {
    return this.apiService.getSellersList(id);
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.apiService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiDto: UpdateApiDto) {
    return this.apiService.update(+id, updateApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}
