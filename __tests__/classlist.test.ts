import { classList } from '@/util/classList';

import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
 
describe('classList', () => {
  it('should return a valid string', () => {
    const res = classList(['123', '456']);

    expect(res).toEqual('123 456 ')
  })
})