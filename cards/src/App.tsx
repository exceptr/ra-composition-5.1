import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card 
      title='Card title' 
      text='Some quick example text to build on the card title and make up the bulk of the card'
      link='#'
      />

      <Card 
      title='Card title' 
      text='Some quick example text to build on the card title and make up the bulk of the card'
      link='#'
      image='https://upload.wikimedia.org/wikipedia/ru/a/a6/Bender_Rodriguez.png'
      />
    </div>
  );
}

export default App;
