import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepositiory: Repository<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepositiory.save(createTaskDto);
  }

  findAll() {
    return this.taskRepositiory.find();
  }

  findOne(id: number) {
    return this.taskRepositiory.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepositiory.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepositiory.delete(id);
  }
}
