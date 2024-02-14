
// import './App.css';
// import searchIcon from "./assets/searchIcon.png";
// import snowIcon from "./assets/snow.png";
// import {useState,useEffect} from "react";
// import windIcon from"./assets/wind.png";
// import humidityIcon from"./assets/drop.png";
// import drizzleIcon from "./assets/drizzle.png";
// import cloudIcon from "./assets/clouds.png";
// import rainIcon from "./assets/heavy-rain.png";
// import clearIcon from"./assets/sun.png";

// const WhetherDetailes=({icon,temp,city,country,lat,log,humidity,wind})=>{
//   return(
//     <>
//     <div className="image">
//     <img src={icon} alt="sun" width="16px" height="160px"/>
//   </div>
//   <div className="temp">{temp}</div>
//   <div className="loacation">{city}</div>
//   <div className="country">{country}</div>
//   <div className="cord">
//     <div>
//       <span className="lat">Latitude</span>
//       <span>{lat}</span>
//     </div>
//     <div>
//       <span className="log">Longitude</span>
//       <span>{log}</span>
//     </div>
//   </div>
//   <div className="data-container">
//     <div className="element">
//       <img src={humidityIcon} alt="humidity" className="icon"/>
//       <div className="data">
//         <div className="humidity-percent">{humidity}%</div>
//         <div className="text">Humidity</div>
//       </div>
//     </div>
//     <div className="element">
//       <img src={windIcon} alt="wind" className="icon"/>
//       <div className="data">
//         <div className="wind-percent">{wind} km/h</div>
//         <div className="text">Wind speed</div>
//       </div>
//     </div>
//   </div>
//   </>
//   );

// };

// function App() {

//   let api_key="dc42f9368d3d223b484a8a500c0283c6";
//   const[text,setText]=useState("chennai")
//   const[temp,setTemp]=useState(0);
//   const[icon,setIcon]=useState(snowIcon);
//   const[city,setCity]=useState("chennai");
//   const[lat,setLat]=useState(0);
//   const[log,setLog]=useState(0);
//   const[humidity,setHumidity]=useState(0);
//   const[wind,setWind]=useState(0);
//   const[cityNotFound,setCityNotFound]=useState(false)
//   const[loading,setLoading]=useState(false)
//   const[country,setCountry]=useState("IN")
//   const[error,setError]=useState(null)

//   const weatherIconMap={
//     "01d":clearIcon,
//     "01n":clearIcon,
//     "02d":cloudIcon,
//     "02n":cloudIcon,
//     "03d":drizzleIcon,
//     "03n":drizzleIcon,
//     "04d":drizzleIcon,
//     "04n":drizzleIcon,
//     "09d":rainIcon,
//     "09n":rainIcon,
//     "10d":rainIcon,
//     "10n":rainIcon,
//     "13d":snowIcon,
//     "13n":snowIcon,
//   }

//   const search=async()=>{
//     setLoading(true);
//     let url=`api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${api_key}&units=Metric`;

//     try{
//       let response= await fetch(url);
//       let data= await response.json();
//       // console.log(data)
//       if(data.cod ==="404"){
//         console.log("City not found");
//         setCityNotFound(true);
//         setLoading(false);
//         return;
//       }else{
//         setHumidity(data.main.humidity);
//         setWind(data.wind.speed);
//         setTemp(Math.floor(data.main.temp));
//         setCity(data.name);
//         setCountry(data.sys.country);
//         setLat(data.coord.lat);
//         setLog(data.coord.lon);
//         const weatherIconCode =data.weather[0].icon;
//         setIcon(weatherIconMap[weatherIconCode]||clearIcon);
//         setCityNotFound(false);
//       }

//     }catch(error){
//       setError("An error occurred while fetching weather data");
//       console.error("Error occured:",error.message);
//     }finally{
//       setLoading(false);
//     }
//   };
//   const handlecity=(e)=>{
//         setText(e.target.value);
//   };
//   const handleKeyDown=(e)=>{
//         if(e.key==="Enter"){
//           search();
//         }
//   };
//   useEffect(()=>{
//     search();
//   },[]);

//   return (
//     <div className="container">
//       <div className='input-container'>
//         <input type='text' className='cityInput' placeholder='Search City' onChange={handlecity}value={text} onKeyDown={handleKeyDown}name="name" autoComplete='off'/>
//         <div className='searchIcon' onClick={()=>{search()}}>
//           <img src={searchIcon} alt='search' width="20px" height="20px"/>
//         </div>
//       </div>
//       {!loading && !cityNotFound  && <WhetherDetailes icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}
//       {loading && <div className='loading-message'>Loading...</div>}
//       {error && <div className='error-message'>{error}</div>}
//       {cityNotFound && <div className='city-not-found'>{cityNotFound}</div>}
//       <p className="copyright">Designed by <span>Borgi</span></p>
//     </div>
//   );
// }

// export default App;
import './App.css';
import searchIcon from "./assets/searchIcon.png";
import snowIcon from "./assets/snow.png";
import { useState, useEffect } from "react";
import windIcon from "./assets/wind.png";
import humidityIcon from "./assets/drop.png";
import drizzleIcon from "./assets/drizzle.png";
import cloudIcon from "./assets/clouds.png";
import rainIcon from "./assets/heavy-rain.png";
import clearIcon from "./assets/sun.png";

const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="weather" width="160px" height="160px" />
      </div>
      <div className="temp">{temp}</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="wind" className="icon" />
          <div className="data">
            <div className="wind-percent">{wind} km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const api_key = "dc42f9368d3d223b484a8a500c0283c6";
  const [text, setText] = useState("chennai");
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState(snowIcon);
  const [city, setCity] = useState("chennai");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("IN");
  const [error, setError] = useState(null);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === "404") {
        setCityNotFound(true);
        setLoading(false);
        return;
      } else {
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setTemp(Math.floor(data.main.temp));
        setCity(data.name);
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLog(data.coord.lon);
        const weatherIconCode = data.weather[0].icon;
        setIcon(weatherIconMap[weatherIconCode] || clearIcon);
        setCityNotFound(false);
      }
    } catch (error) {
      setError("An error occurred while fetching weather data");
      console.error("Error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="container">
      <div className='input-container'>
        <input type='text' className='cityInput' placeholder='Search City' onChange={handleCity} value={text} onKeyDown={handleKeyDown} id="name" autoComplete='off'/>
        <div className='searchIcon' onClick={search}>
          <img src={searchIcon} alt='search' width="20px" height="20px" />
        </div>
      </div>
      {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}
      {loading && <div className='loading-message'>Loading...</div>}
      {error && <div className='error-message'>{error}</div>}
      {cityNotFound && <div className='city-not-found'>City not found</div>}
      <p className="copyright">Designed by <span>Borgi</span></p>
    </div>
  );
}

export default App;