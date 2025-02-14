
import { useState } from 'react'
import '../App.css'
import CreateArea from './CreateArea'
import QR from './QR'
import Header from './Header'


function App(props) {
  const [qr, setQr] = useState([]);

  function createQr(newQr){
    setQr([newQr]);
  }

  function clearQr(){
    setQr([]);
  }

  return (
    <div>
      <Header/>      
      <CreateArea onAdd={createQr} onClear={clearQr}/>
      {qr.map((qrItem, index)=>(
        <QR 
        key={index}
        url={qrItem.url}
        fgColor={qrItem.fgColor}
        bgColor={qrItem.bgColor}/>
      ))}
      
      </div>
     
  
  )
}

export default App
