// Компонент отвечает за заголовки поиска над поисковой строкой

interface SearchItemType {
  text: string;
  url: string;
}

const SearchItem: React.FC<SearchItemType> = ({text, url}) => {
  return (
    <li className="new-item">
      <a href={url} className="new-item-text">{text}</a>
    </li>
  )
}

export default SearchItem;