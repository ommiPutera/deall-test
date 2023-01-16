'use client'

import {create} from 'zustand'

export interface ProductType {
  id: number
  title: string
  brand: string
  price: number
  stock: number
  category: string
  description: string
  discountPercentage: number
  rating: number
}

interface IItems {
  products: ProductType[] | []
  total: number
  skip: number
  limit: number
}

interface ProductsState {
  isLoading: boolean
  setIsLoading: (bool: boolean) => void
  items: IItems
  setItems: (res: any) => void
  products: []
  setProducts: (res: any) => void
  isSearchEmpty: boolean
  setIsSearchEmpty: (bool: boolean) => void
  isReload: boolean
  setIsReload: (bool: boolean) => void
  limit: number
  setLimit: (newLimit: number) => void
  skip: number
  setSkip: (newSkip: number) => void
}

const useProductsStore = create<ProductsState>(set => ({
  isLoading: true,
  setIsLoading: bool => set(state => ({isLoading: bool})),
  items: {products: [], total: 10, limit: 10, skip: 0},
  setItems: res => set(state => ({items: res})),
  products: [],
  setProducts: res => set(state => ({products: res})),
  isSearchEmpty: true,
  setIsSearchEmpty: bool => set(state => ({isSearchEmpty: bool})),
  isReload: false,
  setIsReload: bool => set(state => ({isReload: bool})),
  limit: 10,
  setLimit: newLimit => set(state => ({limit: newLimit})),
  skip: 0,
  setSkip: newSkip => set(state => ({skip: newSkip})),
}))

export {useProductsStore}
