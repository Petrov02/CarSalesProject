import { DB } from "../core/DB";

export class Models extends DB {
    async getAllModels() {
        const [Row, Field]= await this.conn.query('SELECT * FROM models');
        this.conn.end();
      return Row;
    }

    async getModelsByBrand(brand: string) {
      const [Row, Field]= await this.conn.query(`SELECT m.name FROM models as m JOIN brands as b on b.id = m.brand_id WHERE b.name like '${brand}'`);
      this.conn.end();
      return Row;
    }
}