import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';

import StarRating from './StarRating.jsx'

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
    {/* <App /> */}
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <StarRating maxRating={5} size={24} color='red' className='test' defaultRating={4} />
    <Test />
  </StrictMode>
);
