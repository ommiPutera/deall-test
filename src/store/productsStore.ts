'use client'

import {create} from 'zustand'

interface ProductType {
  id: number
  title: string
  brand: string
  price: number
  stock: number
  category: number
}

interface IItems {
  products: ProductType | []
  total: number
  skip: string
  limit: string
}

interface ProductsState {
  items: IItems
  setItems: (res: any) => void
  products: []
  setProducts: (res: any) => void
  isSearchEmpty: boolean
  setIsSearchEmpty: (bool: boolean) => void
  limit: string
  setLimit: (newLimit: string) => void
  skip: string
  setSkip: (newSkip: string) => void
}

const useProductsStore = create<ProductsState>(set => ({
  items: {products: [], total: 10, limit: '10', skip: '10'},
  setItems: res => set(state => ({items: res})),
  products: [],
  setProducts: res => set(state => ({products: res})),
  isSearchEmpty: true,
  setIsSearchEmpty: bool => set(state => ({isSearchEmpty: bool})),
  limit: '10',
  setLimit: newLimit => set(state => ({limit: newLimit})),
  skip: '10',
  setSkip: newSkip => set(state => ({skip: newSkip})),
}))

export {useProductsStore}
