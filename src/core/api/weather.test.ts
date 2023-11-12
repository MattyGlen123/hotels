import "@testing-library/jest-dom";
import { getWeather } from "./weather";
import axios, { AxiosError } from "axios";
import { mockCurrentWeatherAPI } from "@/core/mocks";
import { weather } from "@/core/urls";

jest.mock('axios');

describe("getWeather", () => {
  it("should return a success response", async () => {
    const mockResponse = {
      data: mockCurrentWeatherAPI,
      isError: false,
      error: null
    }
    const mockLocation = 'Manchester';
    const mockUrl = weather.getByLocation(mockLocation);
    const mockAxiosAction = jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    const response = await getWeather(mockLocation);

    expect(mockAxiosAction).toHaveBeenNthCalledWith(1, mockUrl);
    expect(response.data).toMatchObject(mockCurrentWeatherAPI);
    expect(response.isError).toBeFalsy();
    expect(response.error).toEqual(null);
  });

  it("should return a error response", async () => {
    const mockLocation = 'Manchester';
    const mockUrl = weather.getByLocation(mockLocation);
    const mockAxiosAction = jest.spyOn(axios, 'get');
    
    const error = new AxiosError('Error');

    mockAxiosAction.mockRejectedValueOnce(error)

    const response = await getWeather(mockLocation);

    expect(mockAxiosAction).toHaveBeenNthCalledWith(1, mockUrl);
    
    expect(response).toEqual({
      data: null, 
      isError: true, 
      error: error
    });
  });
});
