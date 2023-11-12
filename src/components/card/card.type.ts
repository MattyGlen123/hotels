import { Hotel } from '@/core/types/index.type'

export type CardProps = Hotel & {
  initallyExpanded: boolean
  cardIndex: number
}
