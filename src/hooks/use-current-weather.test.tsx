import { renderHook } from "@testing-library/react";
import { useCurrentWeather } from "./use-current-weather";
import { useWeatherStore } from "@/store/weather";
import { mockCurrentWeather } from "@/core/mocks";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

type UseRouter = Partial<ReturnType<typeof useRouter>>;
type UseWeatherStore = Partial<ReturnType<typeof useWeatherStore>>;

type SetupOptions = {
  useRouter: UseRouter;
  useWeatherStore: UseWeatherStore;
};

jest.mock("src/store/weather", () => ({
  useWeatherStore: jest.fn().mockImplementation(() => ({
    state: jest.fn(),
  })),
}));

const defaultState = {
  currentWeather: {
    data: null,
    error: null,
    query: jest.fn(),
    isLoading: false,
    isError: false,
  },
  location: "",
  setLocation: jest.fn(),
};

const defaultQuery = {
  query: {},
};

const setup = (options?: Partial<SetupOptions>) => {
  const setupOptions: Partial<SetupOptions> = {
    useRouter: defaultQuery,
    useWeatherStore: defaultState,
    ...options,
  };

  (useWeatherStore as unknown as jest.Mock).mockReturnValue(
    setupOptions.useWeatherStore
  );

  (useRouter as jest.Mock).mockReturnValue(setupOptions.useRouter);

  jest.mock("next/router", () => ({
    useRouter: () => ({
      query: {},
    }),
  }));

  return renderHook<ReturnType<typeof useCurrentWeather>, undefined>(() =>
    useCurrentWeather()
  );
};

describe("useCurrentWeather", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return default values when locationQueryString is not defined", () => {
    const { result } = setup();
    const { isLoading, weatherData, isError } = result.current;

    expect(isError).toBe(false);
    expect(weatherData).toBeNull();
    expect(isLoading).toBe(false);
  });
});
