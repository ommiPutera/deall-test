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
    limit: 1,
    products: [
      {
        id: 4,
        title: 'OPPOF19',
        description: 'OPPO F19 is officially announced on April 2021.',
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: 'OPPO',
        category: 'smartphones',
      },
    ],
    skip: 0,
    total: 1,
  })
}
