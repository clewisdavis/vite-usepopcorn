import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import './index.css';

import StarRating from './StarRating.jsx'
import App from './App.jsx';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} starts</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
