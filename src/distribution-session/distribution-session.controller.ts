import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistributionSessionService } from './distribution-session.service';
import { CreateDistributionSessionDto } from './dto/create-distribution-session.dto';
import { UpdateDistributionSessionDto } from './dto/update-distribution-session.dto';
import { BaseController } from 'src/base/base.controller';
import { DistributionSession } from 'src/entities/distribution-session.entity';

@Controller('distribution-session')
export class DistributionSessionController extends BaseController<DistributionSession>{
  constructor(private readonly distributionSessionService: DistributionSessionService) {
		super(distributionSessionService)
	}
}
