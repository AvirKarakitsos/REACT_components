//import './App.css'
import Collapse from './components/Collapse.jsx'
import Label from './components/Label.jsx';
import Progress from './components/Progress.jsx';
import Search from './components/Search.jsx';
import { faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add( faChevronLeft, faMagnifyingGlass );

function App() {
  return (
    <>
      <h1>Hello World</h1>

      <h2>Collapse</h2>
      <Collapse/>

      <h2>Label Swapp</h2>
      <Label/>
      
      <h2>Progress Circle</h2>
      <Progress/>

      <h2>Search Bar</h2>
      <Search/>
    </>
  )
}

export default App
