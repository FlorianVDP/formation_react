import React from 'react';
import ReactDOM from 'react-dom';
import App from "./classes/App";
import data from "./_data/pokemon.json";

import './reset.css';
import './index.css';


ReactDOM.render(<App data={data} />, document.getElementById('root'));