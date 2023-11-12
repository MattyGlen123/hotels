import '@testing-library/jest-dom'
import { getHotels } from './hotels'
import axios, { AxiosError } from 'axios'
import { hotels } from '@/core/urls'
import { mockHotels } from '../mocks'

jest.mock('axios')

describe('getWeather', () => {
  it('should return a success response', async () => {
    const mockResponse = {
      data: mockHotels,
      isError: false,
      error: null
    }

    const mockUrl = hotels.get
    const mockAxiosAction = jest
      .spyOn(axios, 'get')
      .mockResolvedValue(mockResponse)

    const response = await getHotels()

    expect(mockAxiosAction).toHaveBeenNthCalledWith(1, mockUrl)
    expect(response.data).toMatchObject(mockHotels)
    expect(response.isError).toBeFalsy()
    expect(response.error).toEqual(null)
  })

  it('should return a error response', async () => {
    const mockUrl = hotels.get
    const mockAxiosAction = jest.spyOn(axios, 'get')

    const error = new AxiosError('Error')

    mockAxiosAction.mockRejectedValueOnce(error)

    const response = await getHotels()

    expect(mockAxiosAction).toHaveBeenNthCalledWith(1, mockUrl)

    expect(response).toEqual({
      data: null,
      isError: true,
      error: error
    })
  })
})
