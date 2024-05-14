import { useState } from 'react'
import './App.css'
import First from './Component/first';

function App() {
  
  const [initial, setInitial] = useState("Initial state of a btn");
  const [count , setCount ] = useState(1);
  const [text , setText ] = useState("All");
  const [image , setImage ] = useState("https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/MayART/GW/updated/lifestyle._CB558396106_.png");

  return (
    <>
                <button style={{backgroundColor:"#646cffaa"}}
            onClick={() => {
              setCount(count + 1);
              setInitial(`You have Clicked  ${count} times`)
            }}
    
    >{initial}</button><hr /><br />




    <button style={{backgroundColor:"#646cffaa"}} 
            onClick={() => {
              setText("Music")
            }}
     >{text}</button><hr /><br />



     <button style={{backgroundColor:"#646cffaa" , marginBottom:"20px"}} 
              onClick={()=>{
                setImage("https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/May/5300----Kitchen-and-home-essentials--hero-3000-X-1200._CB558645899_.jpg")
              }}
     
     >Change Image</button>
     <div>
              <img width={800} src={image} alt="amazone Image" />
     </div><hr />

     <First />
    </>
  )
}

export default App;
