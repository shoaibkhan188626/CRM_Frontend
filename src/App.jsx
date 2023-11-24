import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const API = 'https://fakestoreapi.com/products/1';

  const response = async () => {
    try {
      const result = await axios.get('https://fakestoreapi.com/products/1');
      console.log(result.data);
      setData(result);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      response();
    }, []);
  };
  return <div>App</div>;
};

export default App;
