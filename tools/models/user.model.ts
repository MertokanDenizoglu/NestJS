import { AuditModel } from './audit.model';
import {RoleModel} from 'tools/models/role.model'
import {GroupModel} from 'tools/models/group.model'
export class UserModel {
  id: string;
  name: string;
  surname: string;
  birthDay:Date;
  image: string;
  email: string;
  password: string;
  passwordHash: string;
  audit: AuditModel;
  roles: RoleModel[];
  groups: GroupModel[];
}
