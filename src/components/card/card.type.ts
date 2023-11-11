import { Hotel } from '@/core/types/hotel.type'

export type CardProps = Hotel & {
  initallyExpanded: boolean
  cardIndex: number
}
