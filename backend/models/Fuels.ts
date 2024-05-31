import { DB } from "../core/DB";

export class Fuels extends DB {
    async getAllFuels() {
        const [Row, Field]= await this.conn.query('SELECT * FROM fuels');
        this.conn.end();
      return Row;
    }
}