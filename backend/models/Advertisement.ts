/*
import { DB } from "../core/DB";

export class Advertisement extends DB {
    static findAll() {
      throw new Error('Method not implemented.');
    }
    async getAllAdvertisements() {
        const [Rows, Fields]= await this.conn.query('SELECT * FROM advertisements');
        this.conn.end()
      return Rows;
    }

    async getAdvertisementById(id: number) {
      const [Rows, Fields]= await this.conn.query(`
      SELECT 
      a.year as advertisement_year, 
      a.price as advertisement_price, 
      a.mileage as advertisement_mileage, 
      a.description as advertisement_description, 
      a.seller_name as advertisement_seller, 
      a.seller_contact as advertisement_contant, 
      a.created_at as advertisement_created, 
      a.updated_at as advertisement_updated, 
      m.name as model_name, 
      m.year as model_year, 
      f.name as fuel_name 
      from advertisements as a 
      JOIN models as m ON a.model_id = m.id JOIN fuels as f on f.id = m.fuels_id WHERE a.id = ${id} ;
      `);
      this.conn.end();
      return Rows;
    }
}
*/
import { DB } from "../core/DB";
import { RowDataPacket } from 'mysql2';

export interface Advertisement extends RowDataPacket {
    id: number;
    model_id: number;
    year: number;
    price: number;
    mileage: number;
    description: string;
    seller_name: string;
    seller_contact: string;
    created_at: string;
    updated_at: string;
}

export class Advertisements extends DB {
    async getAllAdvertisements(): Promise<Advertisement[]> {
        const [rows] = await this.conn.query<Advertisement[]>(`
        SELECT 
        a.photo as advertisement_photo,
        a.year as advertisement_year, 
        a.price as advertisement_price, 
        a.mileage as advertisement_mileage, 
        a.description as advertisement_description, 
        a.seller_name as advertisement_seller, 
        a.seller_contact as advertisement_contant, 
        a.created_at as advertisement_created, 
        a.updated_at as advertisement_updated,
        b.name as brand_name,
        m.name as model_name, 
        m.year as model_year, 
        f.name as fuel_name 
        from advertisements as a 
        JOIN models as m ON a.model_id = m.id JOIN fuels as f on f.id = m.fuels_id JOIN brands as b on m.brand_id = b.id;
        `);
        return rows;
    }

    async getFilteredAdvertisement(brand: string, model: string, fuel: string): Promise<Advertisement[]> {
      const [rows] = await this.conn.query<Advertisement[]>(`
      SELECT 
      a.photo as advertisement_photo,
      a.year as advertisement_year, 
      a.price as advertisement_price, 
      a.mileage as advertisement_mileage, 
      a.description as advertisement_description, 
      a.seller_name as advertisement_seller, 
      a.seller_contact as advertisement_contant, 
      a.created_at as advertisement_created, 
      a.updated_at as advertisement_updated,
      b.name as brand_name,
      m.name as model_name, 
      m.year as model_year, 
      f.name as fuel_name 
      from advertisements as a 
      JOIN models as m ON a.model_id = m.id JOIN fuels as f on f.id = m.fuels_id JOIN brands as b on m.brand_id = b.id 
      WHERE f.name = '${fuel}' AND b.name = '${brand}' and m.name = '${model}';
      `);
      return rows;
  }

    async getAdvertisementById(id: number): Promise<Advertisement | null> {
        const [rows] = await this.conn.query<Advertisement[]>('SELECT * FROM advertisements WHERE id = ?', [id]);
        return rows.length ? rows[0] : null;
    }
}