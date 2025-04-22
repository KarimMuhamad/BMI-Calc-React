import { useState, useEffect } from "react";

const InfoWeather = () => {
   const [weather, setWeather] = useState(null);
   
   useEffect(() => {
      const api_key = import.meta.env.VITE_WEATHER_API_KEY;
      const fetchWeather = async () => {
         try {
            const response = await fetch(
               `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=auto:ip`
            );
            const data = await response.json();
            setWeather(data);
         } catch (error) {
            console.error("Error fetching weather data:", error);
         }
      };

      fetchWeather();
   }, []);

   return (
      <div className="flex justify-center items-center h-auto w-auto px-3 py-1 rounded-md border-1 backdrop-blur-md border-gray-700/50 bg-gray-100/30 shadow-black/30 shadow-xs dark:bg-gray-500/20 dark:border-gray-500/40">
         {weather ? (
            <>
               <img src={weather.current.condition.icon} className="h-6 w-6 mr-1" />
               <p className="font-bold">{weather.current.temp_c} °C</p>
            </>
         ): <p>Loading ...</p>}
      </div>
   );
}

export default InfoWeather;