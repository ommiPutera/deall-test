'use client'

import {create} from 'zustand'

interface ProductsState {
  products: []
  setProducts: (res: any) => void
}

const useProductsStore = create<ProductsState>(set => ({
  products: [],
  setProducts: res => set((state: {products: []}) => ({products: res})),
}))

export {useProductsStore}
