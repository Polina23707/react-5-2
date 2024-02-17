import './App.css'
import NewsItem from './components/NewsItem'
import CurrencyItem from './components/CurrencyItem'
import SearchItem from './components/SearchItem'
import WidgetPanel from './components/WidgetPanel'
import Widget from './components/Widget'
import WeatherWidget from './components/widgets/Weather'
import MapWidget from './components/widgets/Map'
import VisitedpWidget from './components/widgets/Visited'
import ProgramWidget from './components/widgets/Program'
import List from './components/widgets/List'

function App() {
  return (
    <div className='container'>
      <header className='header'>Сейчас в Германии</header>
      <div className='header-block'>
        <div className='news'>
          <ul className='news-list'>
            <NewsItem img='...' text='Новость 1' url='...' />
            <NewsItem img='...' text='Новость 1' url='...' />
            <NewsItem img='...' text='Новость 1' url='...' />
            <NewsItem img='...' text='Новость 1' url='...' />
          </ul>
          <ul className='news-currency'>
            <CurrencyItem name='USD' amount='45,4' change='+2%'/>
            <CurrencyItem name='USD' amount='45,4' change='+2%'/>
            <CurrencyItem name='USD' amount='45,4' change='+2%'/>
            <CurrencyItem name='USD' amount='45,4' change='+2%'/>
          </ul>
        </div>
        <div className='news-adv'></div>
      </div>

      <div className='search'>
        <ul className='search-header'>
          <SearchItem text='Видео' url='...'/>
          <SearchItem text='Картинки' url='...'/>
          <SearchItem text='Новости' url='...'/>
        </ul>
        <div className='search-row'>Search</div>
        <div className='search-tip'>Найдется все...</div>
      </div>
      <WidgetPanel>
      <Widget header={'Погода'} children={
            <WeatherWidget img='...' main='+17' morning='+12' day='+20'/>
          }/>
          <Widget header={'Посещаемое'} children={
            <List>
              <VisitedpWidget category='Недвижемость' topic='о сталинках'/>
              <VisitedpWidget category='Маркет' topic='о сталинках'/>
              <VisitedpWidget category='Авито' topic='о сталинках'/>
            </List>
          }/>
          <Widget header={'Карта Германии'} children={
            <MapWidget text='Расписания'/>
          }/>
          <Widget header={'Телепрограмма'} children={
            <List>
              <ProgramWidget time={'20:00'} name={'the best'} channel={'tnt'}/>
              <ProgramWidget time={'20:00'} name={'the best'} channel={'tnt'}/>
              <ProgramWidget time={'20:00'} name={'the best'} channel={'tnt'}/>
            </List>
          }/>
          <Widget header={'Эфир'} children={
            <List>
            <ProgramWidget name={'the best'} channel={'tnt'}/>
            <ProgramWidget name={'the best'} channel={'tnt'}/>
            <ProgramWidget name={'the best'} channel={'tnt'}/>
          </List>
          }/>
      </WidgetPanel>   
    </div>
  )
}

export default App
