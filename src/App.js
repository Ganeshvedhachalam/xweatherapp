import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Weathercard from './weathercard';

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  const fetchWeatherData = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d2ebbe45f8954bddad3102509242903&q=${city}`);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching the data from URL: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setDisplay(true);
      fetchWeatherData(input);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter the city"
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p>Loading...</p>}

        {display && weatherData && (
          <div
            style={{ display: "flex", gap: "3", justifyContent: "space-between", alignItems: "center" }}
            className="WeatherCards"
          >
            <Weathercard cardname="Temperature" value={`${weatherData.current.temp_c} °C`} />
            <Weathercard cardname="Humidity" value={`${weatherData.current.humidity} %`} />
            <Weathercard cardname="Condition" value={weatherData.current.condition.text} />
            <Weathercard cardname="Wind Speed" value={`${weatherData.current.wind_kph} kph`} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
