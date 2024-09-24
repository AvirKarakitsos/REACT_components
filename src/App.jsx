//import './App.css'
import Collapse from './components/Collapse.jsx'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Label from './components/Label.jsx';

library.add( faChevronLeft );

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Div Collapse</h2>
      <Collapse/>
      <h2>Div Label</h2>
      <Label/>
    </>
  )
}

export default App
