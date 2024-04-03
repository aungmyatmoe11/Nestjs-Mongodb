import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({ // ? dr ka validation atwt
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document { // ? database type
  id: string;
  title: string;
  description: string;
  price: number;
}


// export class Product {
//     constructor(
//       public id: string,
//       public title: string,
//       public description: string,
//       public price: number,
//     ) {}
//   }
