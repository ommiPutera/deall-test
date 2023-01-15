'use client'

import {create} from 'zustand'

interface ProductsState {
  products: []
  setProducts: (res: any) => void
  isSearchEmpty: boolean
  setIsSearchEmpty: (bool: boolean) => void
}

const useProductsStore = create<ProductsState>(set => ({
  isSearchEmpty: true,
  setIsSearchEmpty: bool => set(state => ({isSearchEmpty: bool})),
  products: [],
  setProducts: res => set(state => ({products: res})),
}))

export {useProductsStore}
