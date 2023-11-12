import { Passengers } from '@/core/types/index.type'
import { ReactNode } from 'react'

export const formatPassengers = ({
  adults,
  children = 0,
  infants = 0
}: Passengers): ReactNode => {
  const formatText = (count: number, singular: string, plural: string) => (
    <>
      <strong>{count}</strong> {count === 1 ? singular : plural}
    </>
  )

  if (infants === 0 && children === 0)
    return formatText(adults, 'Adult', 'Adults')

  if (infants === 0)
    return (
      <>
        {formatText(adults, 'Adult', 'Adults')},{' '}
        {formatText(children, 'child', 'children')}
      </>
    )

  if (children === 0)
    return (
      <>
        {formatText(adults, 'Adult', 'Adults')},{' '}
        {formatText(infants, 'infant', 'infants')}
      </>
    )

  return (
    <>
      {formatText(adults, 'Adult', 'Adults')},{' '}
      {formatText(children, 'child', 'children')} &{' '}
      {formatText(infants, 'infant', 'infants')}
    </>
  )
}
