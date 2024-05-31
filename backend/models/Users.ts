import { DB } from "../core/DB";

export interface User {
  username: string;
  password: string;
}

export class Users extends DB {
    async getAllUsers() {
        const [Row, Field]= await this.conn.query('SELECT * FROM users');
        this.conn.end();
      return Row as User[];
    }
    async NewRegister(username:string, password:string, email:string){
      const result=await this.conn.execute("insert into users(username,email,password) values(?,?,?)",[username, email, password]);
      return result
    }
}