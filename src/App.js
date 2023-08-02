import './App.css';
import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='main'>
        <h2 className='main-header'>REACT CRUD OPERATIONS</h2>
        <div>
          <Routes>
            <Route exact path='/create' Component={Create} />
            <Route exact path='read' Component={Read}/>
            <Route exact path='update' Component={Update}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
