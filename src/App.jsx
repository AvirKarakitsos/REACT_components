//import './App.css'
import Collapse from './components/Collapse.jsx'
import Label from './components/Label.jsx';
import Progress from './components/Progress.jsx';
import Search from './components/Search.jsx';
import { faBars, faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Menu from './components/Menu.jsx';
import Tab from './components/Tab.jsx';

library.add( faChevronLeft, faMagnifyingGlass, faBars );

function App() {
  return (
    <>
      <h1>Hello World</h1>
      
      <section className='section'>
        <h2>Collapse</h2>
        <Collapse/>
      </section>

      <section className='section'>
        <h2>Label Swapp</h2>
        <Label/>
      </section>

      <section className='section'>
        <h2>Progress Circle</h2>
        <Progress/>
      </section>

      <section className='section'>
        <h2>Search Bar</h2>
        <Search/>
      </section>

      <section className='section'>
        <h2>Menu Mobile</h2>
        <Menu/>
      </section>

      <section className='section'>
        <h2>Tab</h2>
        <Tab/>
      </section>
    </>
  )
}

export default App
