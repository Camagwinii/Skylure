interface WeatherIconProps {
  id: number;
  icon: string;
  description?: string;
  className?: string;
}

const ICON_URL = "https://api.iconify.design/meteocons";

/*
 * OpenWeather icon-code fallback.
 *
 * d = day
 * n = night
 */
const weatherIcons: Record<string, string> = {
  // Clear
  "01d": "clear-day",
  "01n": "clear-night",

  // Few clouds
  "02d": "partly-cloudy-day",
  "02n": "partly-cloudy-night",

  // Scattered clouds
  "03d": "cloudy",
  "03n": "cloudy",

  // Broken / overcast clouds
  "04d": "overcast-day",
  "04n": "overcast-night",

  // Drizzle
  "09d": "drizzle",
  "09n": "drizzle",

  // Rain
  "10d": "rain",
  "10n": "rain",

  // Thunderstorms
  "11d": "thunderstorms",
  "11n": "thunderstorms",

  // Snow
  "13d": "snow",
  "13n": "snow",

  // Mist / fog
  "50d": "fog-day",
  "50n": "fog-night",
};

/*
 * OpenWeather condition IDs.
 *
 * Several OpenWeather conditions can use the
 * same Meteocons icon because Meteocons does not
 * need a separate image for every OpenWeather ID.
 */
const conditionIcons: Record<number, string> = {
  // ============================
  // THUNDERSTORMS
  // ============================

  200: "thunderstorms",
  201: "thunderstorms",
  202: "thunderstorms",
  210: "thunderstorms",
  211: "thunderstorms",
  212: "thunderstorms",
  221: "thunderstorms",
  230: "thunderstorms",
  231: "thunderstorms",
  232: "thunderstorms",

  // ============================
  // DRIZZLE
  // ============================

  300: "drizzle",
  301: "drizzle",
  302: "drizzle",
  310: "drizzle",
  311: "drizzle",
  312: "drizzle",
  313: "drizzle",
  314: "drizzle",
  321: "drizzle",

  // ============================
  // RAIN
  // ============================

  // Light / moderate / heavy rain
  // all use the valid "rain" icon.
  500: "rain",
  501: "rain",
  502: "rain",
  503: "rain",
  504: "rain",

  // Freezing rain
  511: "sleet",

  // Shower rain
  520: "rain",
  521: "rain",
  522: "rain",
  531: "rain",

  // ============================
  // SNOW
  // ============================

  600: "snow",
  601: "snow",
  602: "snow",

  // Sleet
  611: "sleet",
  612: "sleet",
  613: "sleet",

  // Rain + snow
  615: "sleet",
  616: "sleet",

  // Snow showers
  620: "snow",
  621: "snow",
  622: "snow",

  // ============================
  // ATMOSPHERE
  // ============================

  // Mist
  701: "mist",

  // Smoke
  711: "smoke",

  // Haze
  721: "haze",

  // Dust
  731: "dust",

  // Fog
  741: "fog",

  // Sand
  751: "dust",

  // Dust
  761: "dust",

  // Volcanic ash
  762: "smoke",

  // Squalls
  771: "wind",

  // Tornado
  781: "tornado",
};

export function WeatherIcon({
  id,
  icon,
  description,
  className = "h-10 w-10",
}: WeatherIconProps) {
  const isNight = icon.endsWith("n");

  /*
   * Start by checking whether we have a specific
   * OpenWeather condition mapping.
   */
  let iconName = conditionIcons[id];

  /*
   * Clear sky
   */
  if (id === 800) {
    iconName = isNight ? "clear-night" : "clear-day";
  }

  /*
   * Few clouds
   */
  if (id === 801 || id === 802) {
    iconName = isNight
      ? "partly-cloudy-night"
      : "partly-cloudy-day";
  }

  /*
   * Scattered clouds
   */
  if (id === 803) {
    iconName = "cloudy";
  }

  /*
   * Overcast
   */
  if (id === 804) {
    iconName = isNight
      ? "overcast-night"
      : "overcast-day";
  }

  /*
   * If no condition-specific icon exists,
   * fall back to OpenWeather's icon code.
   */
  if (!iconName) {
    iconName = weatherIcons[icon] ?? "not-available";
  }

  return (
    <img
      src={`${ICON_URL}/${iconName}.svg`}
      alt={description ?? "Weather"}
      className={className}
      loading="lazy"
    />
  );
}
