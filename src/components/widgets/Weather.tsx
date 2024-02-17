// Компонент отвечает за виждет Погоды

interface WeatherWidgetType {
  img: string;
  main: string;
  morning: string;
  day: string;
}

const WeatherWidget: React.FC<WeatherWidgetType> = ({img, main, morning, day}) => {
  return (
    <div className="weather-widget">
      <img className="weather-img" src={img} alt="..."></img>
      <div className="weather-main">{main}</div>
      <div>
        <div className="currency-amount">Утром {morning},</div>
        <div className="currency-change">Днем {day}</div>
      </div>
    </div>
  )
}

export default WeatherWidget;