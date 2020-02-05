import React, { useState, useEffect } from 'react';
import { fetchQuote } from '../services/quoteAPI';
import Quote from '../components/Quote';
import Button from '../commons/Button';


  return (
    <>
      <Button text="Get a new one" onClick={fetch} />
      <Quote {...quote} />

    </>
  );
};
