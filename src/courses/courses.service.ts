import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from 'src/courses/courses.entity';

@Injectable()
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      name: 'Introdução ao TypeScript',
      description:
        'Aprenda os fundamentos do TypeScript, uma linguagem que expande o JavaScript.',
      tags: ['TypeScript', 'Programação', 'JavaScript'],
    },
    {
      id: 2,
      name: 'Desenvolvimento Web com React',
      description:
        'Curso completo para criar aplicações web interativas com React.',
      tags: ['React', 'Desenvolvimento Web', 'Frontend', 'JavaScript'],
    },
    {
      id: 3,
      name: 'Ciência de Dados com Python',
      description:
        'Domine análise de dados e aprendizado de máquina com Python.',
      tags: [
        'Python',
        'Ciência de Dados',
        'Machine Learning',
        'Análise de Dados',
      ],
    },
    {
      id: 4,
      name: 'Fundamentos de Cibersegurança',
      description:
        'Conheça os princípios básicos de segurança da informação e redes.',
      tags: ['Cibersegurança', 'Segurança', 'Redes', 'Gestão de Riscos'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((el) => Number(el.id) == id);
    if (!course) {
      throw new HttpException(`Curso com o ID ${id} não foi encontrado`, HttpStatus.NOT_FOUND);
    }

    return course;
  }

  create(any): Course {
    const newCourse: Course = any;

    this.courses.push(newCourse);

    return newCourse;
  }

  update(id: number, updateCourseDTO: any) {
    const findCourse = this.courses.find((el) => el.id == id);

    if (!findCourse) return 'Curso não encontrado';

    const index = this.courses.findIndex((course) => course.id == id);

    this.courses[index] = {
      id,
      ...updateCourseDTO,
    };

    return updateCourseDTO;
  }

  destroy(id: Number) {
    const index = this.courses.findIndex((course) => course.id == id);
    
    if (index === -1) return 'Curso não encontrado';

    this.courses.splice(index, 1);

    return this.findAll();
  }
}
