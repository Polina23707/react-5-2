// Компонент отвечает за формирование списков виджетов "Посещаемое", "Телепрограмма", "Эфир"

interface ListWidgetType {
  children: React.ReactNode;
}

const List: React.FC<ListWidgetType> = ({children}) => {
  return(
    <ul className="widget-list">
      {children}
    </ul>
  )
}

export default List;