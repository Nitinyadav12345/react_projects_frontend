import React, { useRef, useState } from "react";
import Card from "../components/Card";
import sunrise from "../images/sunrise.png";
import sundown from "../images/sunset.png";
import precepetation from "../images/drop.png";
import humidity from "../images/water.png";
import wind from "../images/wind.png";
import pressure from "../images/resilience.png";
import feelslike from "../images/temprature.png";
import visibility from "../images/eyes.png";

function Screen_w() {
  const Api_key =process.env.REACT_APP_WEATHER_API;
  const inputRef = useRef(null);
  const [apiData, setapiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];
  

  const fetchData = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${inputRef.current.value}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setapiData(null);
        if (data?.error?.code === 1006 || data?.error?.code === 1003) {
          setShowWeather([
            {
              type: "Not Found",
              img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png",
            },
          ]);
        }
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.current.condition.text
          )
        );
        console.log(data);
        setapiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="h-full w-full bg-blue-300 mt-2">
      <div className="flex justify-center gap-4">
        <input
          type="text"
          ref={inputRef}
          placeholder="enter your location"
          className="text-xl border-b p-1 mt-2 border-gray-200 font-semibold uppercase bg-blue-100"
        />
        <button className="bg-blue-800 rounded-lg mt-2 p-2" onClick={fetchData}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
            alt="..."
            className="w-8"
          />
        </button>
      </div>
      <div className="grid place-items-center mt-2">
        {
           showWeather && (<div className="h-[350px] w-[350px] bg-blue-100 flex items-center flex-col gap-2">
          <p className="font-bold text-2xl text-zinc-700">
            {(apiData?.location?.name ?apiData?.location?.name:"---") + "," + (apiData?.location?.country ? apiData?.location?.country:"---")}
          </p>
          <span className="font-bold text-sm text-zinc-700">
            {(apiData?.location?.localtime ? apiData?.location?.localtime:"---") + ", TIMEZONE:-"+ (apiData?.location?.tz_id ? apiData?.location?.tz_id : "---")} 
          </span>
          <img
            src={showWeather[0]?.img
              ? showWeather[0]?.img
              : apiData.current.condition.icon
            }
            alt="---"
            className=" w-36 h-36"
          />
          <p className="font-bold text-2xl text-zinc-800">
            {showWeather[0]?.type
              ? showWeather[0]?.type
              : apiData.current.condition.text}
          </p>
          <div className="flex flex-row">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
              alt="..."
              className="h-9 mt-1"
            />
            <h2 className="text-4xl font-extrabold text-zinc-800">
              {(apiData?.current?.temp_c ? apiData?.current?.temp_c : "---")}&#176;C
            </h2>
          </div>
        </div>)
        }
      </div>
      <h2 className="font-extrabold text-3xl mt-2 text-zinc-800 text-center">
        Weather Details
      </h2>

      {/* calling the cards */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">

      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={sunrise} txt1="SUNRISE" txt2="5:13AM"/>) }
        {/* <Card imga={sunrise} txt1="SUNRISE" txt2="5:13AM"/> */}
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={sundown} txt1="SUNSET" txt2='6:49PM'/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={precepetation} txt1="PPTN." txt2={(apiData?.current?.precip_mm ? apiData?.current?.precip_mm : "---" )+"mm"}/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={humidity} txt1="HUMIDITY" txt2={(apiData?.current?.humidity ? apiData?.current?.humidity : "---")+"%"}/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={wind} txt1="WIND SPEED" txt2={(apiData?.current?.wind_kph ? apiData?.current?.wind_kph :"---" )+"kph"}/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={pressure} txt1="PRESSURE" txt2={(apiData?.current?.pressure_mb ? apiData?.current?.pressure_mb  :"---") +"mb"}/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={feelslike} txt1="FEELSLIKE" txt2={(apiData?.current?.feelslike_c ? apiData?.current?.feelslike_c:"---") +"C"}/>) }
      {loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/> </div>) :  (<Card imga={visibility} txt1="VISIBILITY" txt2={(apiData?.current?.vis_km ? apiData?.current?.vis_km : "---") +"KM"}/>) }
      </div>
    </div>
  );
}

export default Screen_w;
