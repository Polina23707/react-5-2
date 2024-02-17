// Компонент отвечает за элементы списка в виджете "Посещаемое"

interface VisitedWidgetType {
  category: string;
  topic: string;
}

const VisitedpWidget: React.FC<VisitedWidgetType> = ({category, topic}) => {
  return (
    <li className="map-widget">
      <div>{category} - </div>
      <div>{topic}</div>
    </li>
  )
}

export default VisitedpWidget;