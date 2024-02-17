// Компонент отвечает за элементы списка в виджетах "телепрограмма" и "Эфир"

interface ProgramWidgetType {
  time?: string;
  name: string;
  channel: string;
}

const ProgramWidget: React.FC<ProgramWidgetType> = ({time, name, channel}) => {

  function timeCheck() {
    if (!time) {
      return <img src="..." alt={'icon'}></img>
    } else {
      return time;
    }
  }

  return (
    <li className="program-widget">
      <div className="program-item">{timeCheck()} </div>
      <div className="program-item">{name} </div>
      <div className="program-item">{channel}</div>
    </li>
  )
}

export default ProgramWidget;