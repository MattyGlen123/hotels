import { PathOptions } from '@/core/paths/paths.type'
import { ReactNode } from 'react'

export type RadioProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isChecked: boolean
  label: string | ReactNode
  value: string
  iconName: PathOptions
  name: string
}
