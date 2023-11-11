import { ReactNode } from 'react'

export type AccordionProps = {
  closeText: string | ReactNode
  openText: string | ReactNode
  body: string
  initallyExpanded: boolean
  id: number
  additionalClassName?: string
}
