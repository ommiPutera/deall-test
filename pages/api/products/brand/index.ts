// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  limit: number
  brands: any
  skip: number
  total: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    limit: 3,
    brands: [
      {
        product: 'samsung',
        total: 2,
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
      },
      {
        product: 'oppo',
        total: 1,
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
      },
      {
        product: 'apple',
        total: 3,
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
          {
            id: 6,
            title: 'MacBook Pro',
            description:
              'MacBook Pro 2021 with mini-LED display may launch between September, November',
            price: 1749,
            discountPercentage: 11.02,
            rating: 4.57,
            stock: 83,
            brand: 'APPle',
            category: 'laptops',
          },
        ],
      },
    ],
    skip: 0,
    total: 3,
  })
}
