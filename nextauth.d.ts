// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
// common interface for JWT and Session
interface IUser extends DefaultUser {
  token?: string;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: IUser;
  }
}
