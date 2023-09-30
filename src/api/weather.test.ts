import "@testing-library/jest-dom";
import { getWeather } from "./weather";
import axios from "axios";
import { mockCurrentWeather } from "@/mocks";
import { weather } from "@/core/urls";

jest.mock('axios');

describe("getWeather", () => {
  it("should return a success response", async () => {
    const mockResponse = {
      data: mockCurrentWeather,
      isError: false,
      error: null
    }
    const mockLocation = 'Manchester';
    const mockUrl = weather.getByLocation(mockLocation);
    const mockAxiosAction = jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    const result = await getWeather(mockLocation);

    expect(mockAxiosAction).toHaveBeenNthCalledWith(1, mockUrl);
    expect(result.data).toEqual(mockCurrentWeather);
    expect(result.isError).toBeFalsy();
    expect(result.error).toEqual(null);
  });
});
