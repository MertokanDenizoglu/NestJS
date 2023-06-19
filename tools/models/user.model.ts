import { AuditModel } from './audit.model';
import { RoleModel } from 'tools/models/role.model';
import { GroupModel } from 'tools/models/group.model';
import * as mongoose from 'mongoose';
export class UserModel {
  id: string;
  name: string;
  surname: string;
  birthDay: Date;
  image: string;
  email: string;
  password: string;
  passwordHash: string;
  audit: AuditModel;
  roles: RoleModel[];
  groups: GroupModel[];
}

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  birthDay: Date,
  audit: Object,
  roles: Array,
  groups: Array,
});
