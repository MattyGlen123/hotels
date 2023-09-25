import { CurrentWeatherProps } from "./current-weather.type";

export const CurrentWeather = ({
  conditionIcon,
  conditionText,
  country,
  location,
  temp,
  time,
}: CurrentWeatherProps) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-7xl mr-6 font-bold">{temp}°c</h1>
        <img
          src={`https:${conditionIcon}`}
          alt={conditionText}
          className="dark:invert"
          width={50}
          height={24}
        />
      </div>
      <div className="flex mb-4 items-end">
        <h2 className="text-4xl font-bold">{location}</h2>,{" "}
        <p className="ml-2">{country}</p>
      </div>
      <div className="flex mb-4 items-center">
        <p className="mr-2">{time}</p>
        <p className="border-l border-slate-50 pl-2">
          Feels like: {conditionText}
        </p>
      </div>
    </>
  );
};
