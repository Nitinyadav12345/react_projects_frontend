import { useRef, useState } from "react";
const Api_key = process.env.REACT_APP_WEATHER_API;
function App() {
  const inputRef = useRef(null);
  const [apiData, setapiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);
  const[loading,setLoading] = useState(false);

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

  const fetchWeather = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${inputRef.current.value}`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setapiData(null);
        if(data?.error?.code === 1006 ||data?.error?.code === 1003){
           setShowWeather([
            {type:"Not Found",
            img:"https://cdn-icons-png.flaticon.com/512/4275/4275497.png"
           }
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
    <div className="bg-gray-800 h-screen grid place-items-center">
      <div className="bg-white w-96 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <input
            type="text"
            ref={inputRef}
            placeholder="enter your location"
            className="text-xl border-b p-1 border-gray-200 font-semibold uppercase"
          />
          <button onClick={fetchWeather}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
              alt=""
              className="w-8"
            />
          </button>
        </div>
        <div className={`duration-300 delay-75 overflow-hidden ${showWeather?"h-[28rem] ":"h-0"}`}>
          {
            loading ? ( <div className="grid place-items-center h-full"> 
              <img src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" alt="..." 
              className="w-14 mx-auto mb-2 animate-spin"/>
            </div>) : (showWeather && (
              <div className="text-center flex flex-col gap-6 mt-10">
                {apiData && (
                  <p className="text-xl font-semibold">
                    {apiData?.location.name + "," + apiData?.location?.country}
                  </p>
                )}
                <img
                  src={showWeather[0]?.img ? showWeather[0]?.img : apiData.current.condition.icon}
                  alt=""
                  className="w-52 mx-auto"
                />
                <h3 className="text-2xl font-bold text-zinc-800">
                  {showWeather[0]?.type ? showWeather[0]?.type : apiData.current.condition.text }
                </h3>
                {apiData && (
                  <>
                    <div className="flex justify-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/7794/7794499.png"
                        alt="..."
                        className="h-9 mt-1"
                      />
                      <h2 className="text-4xl font-extrabold">{apiData?.current?.temp_c}&#176;C</h2>
                    </div>
                  </>
                )}
              </div>
            )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
