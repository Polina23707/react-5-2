// Компонент отвечает за формирование панели виджетов внизу страницы
interface WidgetPanelType {
  children: React.ReactNode;
}

const WidgetPanel: React.FC<WidgetPanelType> = ({children}) => {
  return(
    <div className="widget-panel">
      {children}
    </div>
  )
}

export default WidgetPanel;