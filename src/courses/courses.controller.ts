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
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(readonly courseService: CoursesService) {}
  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  // Rota com um Parâmetro
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  // @HttpCode(204) //Maneira de definir o retorno HTTP.
  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.courseService.create(createCourseDTO);
  }

  // Atualização total do registro.
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.courseService.update(id, updateCourseDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id)
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
