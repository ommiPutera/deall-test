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
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        description:
          'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: 'Microsoft Surface',
        category: 'laptops',
      },
      {
        id: 10,
        title: 'HP Pavilion 15-DK1056WM',
        description:
          'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: 'HP Pavilion',
        category: 'laptops',
      },
    ],
    skip: 0,
    total: 3,
  })
}
