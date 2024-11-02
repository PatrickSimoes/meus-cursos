import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  //Rota SEM parâmetro
  @Get()
  index() {
    return 'Rota base';
  }

  //Rota com sub rota
  @Get('lista')
  findAll(@Res() response) {
    // return response.status(201).send('Todos os cursos');
    return response.status(201).json({ message: 'Todos os cursos' });
  }

  // Rota com um Parâmetro
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso ID ${id}`;
  }

  // @HttpCode(204) //Maneira de definir o retorno HTTP.
  @Post()
  create(@Body() body) {
    return body;
  }

  // Atualização de parte dos registros.
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);

    return `Course updated for ID ${id}`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  destroy(@Param(':id') id: string) {
    return `Delete course with ID ${id}`;
  }

  // Rota com Multiplos Parâmetros
  // @Get(':id/:name')
  // findOne(@Param() params) {
  //   return `ID do ${params.id} Curso ${params.name}`;
  // }
}
