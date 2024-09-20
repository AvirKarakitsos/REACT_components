//import './App.css'
import Collapse from './components/Collapse.jsx'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add( faChevronLeft );

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Collapse/>
    </>
  )
}

export default App
