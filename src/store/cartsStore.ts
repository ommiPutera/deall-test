'use client'

import {create} from 'zustand'

interface CartsType {
  id: number
  title: string
  brand: string
  price: number
  stock: number
  category: number
}

interface IItems {
  carts: CartsType | []
  total: number
  skip: number
  limit: number
}

interface CartsState {
  userId: string
  setUserId: (userId: string) => void
  isLoading: boolean
  setIsLoading: (bool: boolean) => void
  items: IItems
  setItems: (res: any) => void
  carts: []
  setCarts: (res: any) => void
  isSearchEmpty: boolean
  setIsSearchEmpty: (bool: boolean) => void
  limit: number
  setLimit: (newLimit: number) => void
  skip: number
  setSkip: (newSkip: number) => void
}

const useCartsStore = create<CartsState>(set => ({
  userId: '',
  setUserId: userId => set(state => ({userId: userId})),
  isLoading: true,
  setIsLoading: bool => set(state => ({isLoading: bool})),
  items: {carts: [], total: 10, limit: 10, skip: 0},
  setItems: res => set(state => ({items: res})),
  carts: [],
  setCarts: res => set(state => ({carts: res})),
  isSearchEmpty: true,
  setIsSearchEmpty: bool => set(state => ({isSearchEmpty: bool})),
  limit: 10,
  setLimit: newLimit => set(state => ({limit: newLimit})),
  skip: 0,
  setSkip: newSkip => set(state => ({skip: newSkip})),
}))

export {useCartsStore}
