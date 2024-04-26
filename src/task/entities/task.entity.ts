import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  taskName: string;

  @Column({ type: 'text' })
  taskDescription: string;

  @Column({ type: 'varchar', length: 50 })
  assignedTo: string;

  @Column({ type: 'varchar', length: 50 })
  assignedBy: string;

  @CreateDateColumn({ type: 'timestamp' }) // Use solution 1 or 2 here
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true }) // Allow null
  updatedAt: Date;

  @Column({ type: 'timestamp' })
  deadline: Date;

  @Column({
    type: 'enum',
    enum: ['todo', 'in_progress', 'done'],
    default: 'todo',
  })
  status: string;

  @Column({
    type: 'enum',
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  })
  priority: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  action: string | null;
}
