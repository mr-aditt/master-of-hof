import React from 'react';
import ReactDOM from 'react-dom';
import HOF from './components/HigherOrderComponent';
import USERTYPE from './components/UserType';
import './App.css';
import FILTERNAME from './components/FilterName';
import FILTERAGE from './components/FilterAge';
import TOTALEXP from './components/TotalExp';

function App() {
  return (
    <div className="App">
      <div>
        <HOF/>
      </div>
      <div>
        <USERTYPE/>
      </div>
      <div>
        <FILTERNAME/>
      </div>
      <div>
        <FILTERAGE/>
      </div>
      <div>
        <TOTALEXP/>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;