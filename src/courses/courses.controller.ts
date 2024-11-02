import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(readonly coursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  // Rota com um Parâmetro
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  // @HttpCode(204) //Maneira de definir o retorno HTTP.
  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  // Atualização total do registro.
  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  destroy(@Param(':id') id: number) {
    return this.coursesService.destroy(id);
  }

  //Rota com sub rota
  // @Get('lista')
  // findAll(@Res() response) {
  //   // return response.status(201).send('Todos os cursos');
  //   return response.status(201).json({ message: 'Todos os cursos' });
  // }

  // Rota com Multiplos Parâmetros
  // @Get(':id/:name')
  // findOne(@Param() params) {
  //   return `ID do ${params.id} Curso ${params.name}`;
  // }
}
