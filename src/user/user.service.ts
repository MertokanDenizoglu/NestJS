import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (result.length === 0) {
      this.creatingMockUser({
        name: 'John',
        surname: 'Doe',
        email: '<EMAIL>',
        password: '<PASSWORD>',
        birthDay: new Date(),
      });
    }
    return result;
  }

  getUserById(id: string) {
    const user = result.find((data) => data.id == id);
    if (!user) {
      return 'user does not exist';
    } else {
      return user;
    }
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find((res) => {
      res.email === body.email;
    });
    if (isExist) {
      return isExist;
    } else {
      this.creatingMockUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }

  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.birthDay = data.birthDay;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.id = (Math.floor(Math.random() * 60) + 1).toString();
    result.push(user);
  }
}
