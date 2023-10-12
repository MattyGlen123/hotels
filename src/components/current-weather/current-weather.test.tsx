import { classList } from "@/util/classList";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CurrentWeather } from "@/components/current-weather/current-weather";
import { mockCurrentWeather } from "@/core/mocks";

describe("CurrentWeather", () => {
  it("should render today's temp", () => {
    render(<CurrentWeather {...mockCurrentWeather} />);

    const temp = screen.getByRole("heading", {
      name: `${mockCurrentWeather.temp}°c`,
      level: 1,
    });

    expect(temp).toBeInTheDocument();
  });

  it("should render the location", () => {
    render(<CurrentWeather {...mockCurrentWeather} />);

    const location = screen.getByRole("heading", {
      name: mockCurrentWeather.location,
      level: 2,
    });

    expect(location).toBeInTheDocument();
  });

  it("should render the location", () => {
    render(<CurrentWeather {...mockCurrentWeather} />);

    const location = screen.getByRole("heading", {
      name: mockCurrentWeather.location,
      level: 2,
    });

    expect(location).toBeInTheDocument();
  });

  it.each([
    mockCurrentWeather.country,
    mockCurrentWeather.conditionText,
    mockCurrentWeather.time,
  ])("should render the data: %s", (text) => {
    render(<CurrentWeather {...mockCurrentWeather} />);

    const location = screen.getByText(text, { exact: false });

    expect(location).toBeInTheDocument();
  });
});
