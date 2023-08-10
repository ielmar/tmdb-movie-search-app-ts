import { Table, Model, Column } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Movie extends Model {
  @Column({ primaryKey: true })
  id!: number;
  @Column
  title!: string;
  @Column
  year!: number;
  @Column
  image!: string;
  @Column
  overview!: string;
}
