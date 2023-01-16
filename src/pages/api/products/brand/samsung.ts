// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {ProductType} from '@/store/productsStore'
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  limit: number
  products: ProductType[]
  skip: number
  total: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    limit: 2,
    products: [
      {
        id: 3,
        title: 'Samsung Universe 9',
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
      },
      {
        id: 7,
        title: 'Samsung Galaxy Book',
        description:
          'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: 'Samsung',
        category: 'laptops',
      },
    ],
    skip: 0,
    total: 2,
  })
}
