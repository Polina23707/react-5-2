// Компонент отвечает за строчки новостей вверху страницы

interface NewsItemType {
  img: string;
  text: string;
  url: string;
}

const NewsItem: React.FC<NewsItemType> = ({img, text, url}) => {
  return (
    <li className="new-item">
      <img src={img} className="new-item-img" alt="..."></img>
      <a href={url} className="new-item-text">{text}</a>
    </li>
  )
}

export default NewsItem;