import { classList } from '@/core/util/classList'

import '@testing-library/jest-dom'

describe('classList', () => {
  it('should return a valid string', () => {
    const res = classList(['123', '456'])

    expect(res).toEqual('123 456')
  })

  it('should return an empty string', () => {
    const res = classList([''])

    expect(res).toEqual('')
  })

  it('should return a single string', () => {
    const res = classList(['123'])

    expect(res).toEqual('123')
  })
})
