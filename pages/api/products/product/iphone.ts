// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {ProductType} from 'store/productsStore'
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
    limit: 3,
    products: [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
      },
      {
        id: 2,
        title: 'iPhone X',
        description:
          'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
      },
    ],
    skip: 0,
    total: 3,
  })
}
