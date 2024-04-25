import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositiry: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepositiry.save(createUserDto);
  }

  findAll() {
    return this.userRepositiry.find();
  }

  findOne(id: number) {
    return this.userRepositiry.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepositiry.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepositiry.delete(id);
  }
}
