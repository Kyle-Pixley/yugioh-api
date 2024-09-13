import React, { useState, useEffect } from 'react';
import NameInput from './components/NameInput/NameInput';
import CardImage from './components/CardImage/CardImage';
import './App.css';

function App() {

  const [ data, setData ] = useState('');
  const [ name, setName ] = useState('Dark Magician');
  const [ cardDescription, setCardDescription ] = useState('');



  // useEffect(() =>{
  //   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  // }, [])

  useEffect(() => {
    if(name != '') {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
        .then(res => res.json())
        .then(data => {
          setData(data.data[0])
          console.log(data.data[0])
          setCardDescription(data.data[0].desc)
        })
    }
  }, [name])

  useEffect(() => {
    if(data) {
      console.log('this is the data from name', data)
    }
  })
  

  return (
    <>
      <NameInput setName={setName} data={data} />
      {cardDescription}
      <CardImage data={data} />
    </>
  )
}

export default App
