import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
import App from './App'
import {DataLayer} from './DataLayer'
import {initialState} from './Reducer'
import reducer from './Reducer'


function Index(){
  return (
    <div className="index">
      <DataLayer initialState = {initialState} reducer = {reducer}>
        <App />
      </DataLayer>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

