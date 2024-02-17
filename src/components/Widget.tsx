// Компонент отвечает за формирование каждого виджета внизу страницы

interface WigdetType {
  header: string;
  children: React.ReactNode;
}

const Widget: React.FC<WigdetType> = ({header, children}) => {
  return(
    <div className="widget">
      <h2 className="widget-header">{header}</h2>
      <div className="widget-container">
        {children}
      </div>
    </div>
    
  )
}

export default Widget;