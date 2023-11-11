import React from 'react'
import { Accordion } from './accordion'
import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccordionProps } from './accordion.type'
import { mockHotel, mockHotels } from '@/core/mocks'

describe('Accordion', () => {
  const accordionsProps: AccordionProps = {
    openText: 'Read More',
    closeText: 'Read Less',
    body: mockHotel.overview,
    initallyExpanded: true,
    id: 1
  }

  it('should render the default Accordion', () => {
    render(<Accordion {...accordionsProps} />)

    expect(
      screen.getByRole('button', {
        name: accordionsProps.closeText as string,
        expanded: true
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('should toggle the accordion', async () => {
    render(<Accordion {...accordionsProps} />)

    const button = screen.getByRole('button', {
      name: accordionsProps.closeText as string,
      expanded: true
    })

    await userEvent.click(button)

    expect(screen.queryByRole('region')).not.toBeInTheDocument()

    await userEvent.click(button)

    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  // it('should render the correct text', () => {
  //   render(<Accordion {...AccordionsProps} />)

  //   const Accordion = screen.getByRole('Accordion')

  //   expect(
  //     within(Accordion).getByRole('heading', { level: 1 })
  //   ).toBeInTheDocument()

  //   expect(
  //     within(Accordion).getByRole('heading', { level: 2 })
  //   ).toBeInTheDocument()
  // })

  // it('should call the onClick', async () => {
  //   render(<Accordion {...AccordionsProps} />)

  //   const Accordion = screen.getByRole('Accordion')

  //   await userEvent.click(Accordion)

  //   expect(mockOnClick).toHaveBeenCalledTimes(1)
  // })
})
