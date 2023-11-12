import { ReactNode } from 'react'
import { PathOptions } from '../paths/paths.type'

export type Stars = 1 | 2 | 3 | 4 | 5

export type Hotel = {
  name: string
  location: string
  stars: Stars
  passengers: string
  date: string
  departingLocation: string
  price: number
  overview: string
  image: {
    src: string
    alt: string
  }
}

export type Filter = {
  label: string | ReactNode
  value: string
  iconName: PathOptions
}
