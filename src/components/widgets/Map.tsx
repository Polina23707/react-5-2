// Компонент отвечает за виджет "Карта Германии"

interface MapWidgetType {
  text: string;
}

const MapWidget: React.FC<MapWidgetType> = ({text}) => {
  return (
    <div className="map-widget">{text}</div>
  )
}

export default MapWidget;