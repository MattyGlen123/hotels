import { WeatherResponse } from "@/api/weather.type";
import { weather } from "@/core/urls";
import { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { location } = req.query;

    const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

    if (!location || typeof location !== "string") {
      return res.status(400).json({
        error: new AxiosError("Invalid location parameter"),
      });
    }

    if (!WEATHER_API_KEY)
      return res.status(500).json({
        error: new AxiosError("WEATHER_API_KEY is not defined"),
      });

    try {
      const response = await fetch(
        weather.getByLocation(location, WEATHER_API_KEY)
      );

      const r = await response.json();
      return res.status(200).json(r);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: new AxiosError("Method not allowed") });
  }
}
