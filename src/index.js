import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import App from './App';
import "./index.css"

function Test(){
  const [movieRating,setMovieRating] = useState(0);
  return(
    <div>
      <App/>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating
      }/>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating 
    maxRating={5} 
    message={['Terrible','Bad','Okay','Good','Amazing']}
    />
    <Test/>
  </React.StrictMode>
);


