import { DB } from "../core/DB";

export class Brands extends DB {
    async getAllBrands() {
        const [Row, Field]= await this.conn.query('SELECT * FROM brands');
        this.conn.end();
      return Row;
    }
}