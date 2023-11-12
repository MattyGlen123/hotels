import { Filter } from '@/core/types/index.type'

export type FiltersProps = {
  ariaLabel: string
  handleSort: (value: string) => void
  filters: Filter[]
}
