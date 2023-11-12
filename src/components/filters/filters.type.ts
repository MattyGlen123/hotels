import { Filter } from '@/core/types/index.type'

export type FiltersProps = {
  ariaLabel: string
  handleFilterChange: (value: string) => void
  filters: Filter[]
  activeFilter: string
}
