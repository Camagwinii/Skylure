import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";
import { format } from "date-fns";
import type { ForecastData } from "@/api/types";

interface WeatherForecastProps {
  data: ForecastData;
}

interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

export function WeatherForecast({ data }: WeatherForecastProps) {
  const dailyForecasts = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");

    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
        weather: forecast.weather[0],
        date: forecast.dt,
      };
    } else {
      acc[date].temp_min = Math.min(
        acc[date].temp_min,
        forecast.main.temp_min
      );

      acc[date].temp_max = Math.max(
        acc[date].temp_max,
        forecast.main.temp_max
      );
    }

    return acc;
  }, {} as Record<string, DailyForecast>);

  const nextDays = Object.values(dailyForecasts).slice(1, 6);

  const formatTemp = (temp: number) => `${Math.round(temp)}°`;

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-3">
          {nextDays.map((day) => (
            <div
              key={day.date}
              className="
                rounded-lg border p-4

                /* Mobile */
                flex flex-col gap-4

                /* Tablet: 640px - 1023px */
                sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-6 sm:gap-y-3

                /* Desktop: 1024px+ */
                lg:grid lg:grid-cols-3 lg:gap-4
              "
            >
              {/* Date & Description */}
              <div className="min-w-0">
                <p className="font-medium">
                  {format(new Date(day.date * 1000), "EEE, MMM d")}
                </p>

                <p className="truncate text-sm capitalize text-muted-foreground">
                  {day.weather.description}
                </p>
              </div>

              {/* Temperature */}
              <div
                className="
                  flex items-center gap-6

                  /* Mobile */
                  justify-start

                  /* Tablet */
                  sm:justify-end

                  /* Desktop */
                  lg:justify-center
                "
              >
                <span className="flex items-center whitespace-nowrap text-blue-500">
                  <ArrowDown className="mr-1 h-4 w-4 shrink-0" />
                  {formatTemp(day.temp_min)}
                </span>

                <span className="flex items-center whitespace-nowrap text-red-500">
                  <ArrowUp className="mr-1 h-4 w-4 shrink-0" />
                  {formatTemp(day.temp_max)}
                </span>
              </div>

              {/* Humidity & Wind */}
              <div
                className="
                  flex items-center gap-6

                  /* Mobile */
                  justify-start

                  /* Tablet */
                  sm:col-span-2 sm:justify-end

                  /* Desktop */
                  lg:col-span-1 lg:justify-end
                "
              >
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <Droplets className="h-4 w-4 shrink-0 text-blue-500" />
                  <span className="text-sm">
                    {day.humidity}%
                  </span>
                </span>

                <span className="flex items-center gap-1 whitespace-nowrap">
                  <Wind className="h-4 w-4 shrink-0 text-blue-500" />
                  <span className="text-sm">
                    {day.wind.toFixed(2)} m/s
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}