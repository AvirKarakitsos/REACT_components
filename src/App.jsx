import Collapse from './components/Collapse.jsx'
import Label from './components/Label.jsx';
import Progress from './components/Progress.jsx';
import Search from './components/Search.jsx';
import Menu from './components/Menu.jsx';
import Tab from './components/Tab.jsx';
import Password from './components/Password.jsx';
import ShowUp from './components/ShowUp.jsx';
import Appear from './components/Appear.jsx';

import { faBars, faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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
      
      <section className='section'>
        <h2>Password</h2>
        <Password/>
      </section>

      <section className='section'>
        <h2>Animation</h2>
        <ShowUp/>
        <Appear/>
      </section>
    </>
  )
}

export default App
