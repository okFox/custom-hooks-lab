import React, { useState, useEffect } from 'react';
import { fetchQuote } from '../services/quoteAPI';
import Quote from '../components/Quote';
import Button from '../commons/Button';


export const QuoteAppFn = () => {
  const [quote, setQuote] = useState({
    name: '',
    text: '',
    img: ''
  });
  

  const fetch = () => {
    return fetchQuote()
      .then (quote => setQuote(quote));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Button text="Get a new one" onClick={fetch} />
      <Quote {...quote} />

    </>
  );
};
