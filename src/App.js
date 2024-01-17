import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" exact Component={None}/>
      </Routes>
    </Router>
  );
}

export default App;
