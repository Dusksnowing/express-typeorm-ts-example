import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Student {

  @PrimaryGeneratedColumn()
  uid: number;

  @Column({charset:'utf8'})
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;

}

