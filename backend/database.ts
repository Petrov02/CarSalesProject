import {DB} from "./core/DB";

// export const handleQueryResult = (err: any, results: any) => {
//   if (err) {
//     console.error('Грешка при изпълнение на заявката:', err);
//     return;
//   }
//   console.log('Резултати от заявката:', results);
// };

export const getUsers = async () => {
  try {
    const db = new DB();
    const [Row, Field]= await db.conn.query('SELECT * FROM users');
    return Row;
  } catch (error) {
    console.error('Грешка при изпълнение на заявката:', error);
  }
};


