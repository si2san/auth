import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class ABCController {
  @Get('/default')
  findAll(): string {
    return 'Mingalar Par';
  }

  @Get('/library-approach')
  findUsingLibrary(@Res() res): string {
    console.log('Response' + res);
    return res.status(201).send('Mingalar Par');
  }

  @Get('/request-examples')
  requestExamples(@Req() request: Request): string {
    console.log('Request' + request);
    return 'This is the request example';
  }

  @Post('/post-example')
  postExample(): string {
    return 'This is response from post example';
  }

  @Get('employees/:id')
  findOne(@Param() params): string {
    console.log('Params' + params);
    return `This is the employee with id ${params.id}`;
  }

  @Get('employee/:id')
  findoneUsingToken(@Param('id') id: string): string {
    console.log(id);
    return 'This is the employee with id ' + id;
  }

  @Get('ab*cd')
  findWildCardExample(): string {
    return 'This is the wild card example';
  }

  // Handling Status Code
  @Post('/post-examplee')
  @HttpCode(204)
  postExampleWithStatusCode(): string {
    return 'This Code is coming from POST Method';
  }
}
