import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1730661233973 } from 'src/migrations/1730661233973-CreateCoursesTable';
import { CreateTagsTable1730764344852 } from 'src/migrations/1730764344852-CreateTagsTable';
export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1730661233973, CreateTagsTable1730764344852],
});
