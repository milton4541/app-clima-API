import styles from "./app.module.css"
import Alert from "./components/Form/alerts/Alert"
import Form from "./components/Form/Form"
import Spinner from "./components/Form/Spinner/Spinner"
import WeatherDetail from "./components/Form/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"
function App() {

  const {fetchWeather,loading,notFound, weather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather}/>}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
        
      </div>
    </>
  )
}

export default App
