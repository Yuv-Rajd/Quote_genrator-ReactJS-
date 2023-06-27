import './App.css';

import React, { useEffect, useState } from 'react';

import QuoteBox from './components/QuoteBox';
import LikeButton from './components/LikeButoon';
import LikedButton from './components/LikedButton';
import RefreshButton from './components/RefreshButton';


function App() {


  const [quote, setQuote] = useState('');
  const [Auth, setAuth] = useState('');
  const [like, Setlike] = useState(false);
  

  async function fetchQuote() {
    Setlike(false);
    
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    let randIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randIndex].text);
    setAuth(data[randIndex].author)

    
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function liked() {
    Setlike(!like);
  }

  return (
    <div className='quote d-flex w-100 justify-content-center align-items-center flex-column h-100'>
      <QuoteBox quote={quote} Auth={Auth} />
      
      <div>
        {like ? <LikedButton onClick={liked} /> : <LikeButton onClick={liked} />}
        
      <RefreshButton onClick={fetchQuote} />
      </div>
    </div>
  );
}

export default App;
