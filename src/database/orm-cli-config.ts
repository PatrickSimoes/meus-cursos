import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1730661233973 } from 'src/migrations/1730661233973-CreateCoursesTable';
import { CreateTagsTable1730764344852 } from 'src/migrations/1730764344852-CreateTagsTable';
import { CreateCoursesTagsTable1730765499882 } from 'src/migrations/1730765499882-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1730767097958 } from 'src/migrations/1730767097958-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1730767991684 } from 'src/migrations/1730767991684-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1730661233973,
    CreateTagsTable1730764344852,
    CreateCoursesTagsTable1730765499882,
    AddCoursesIdToCoursesTagsTable1730767097958,
    AddTagsIdToCoursesTagsTable1730767991684,
  ],
});
