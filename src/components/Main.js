import React from 'react'
import { useState } from 'react';
import './Main.css';
function Main() {

    const [Hori,setHori]=useState(10)
    const [Veri,setVeri]=useState(10)
    const [Blur,setBlur]=useState(10)
    const [Color,setColor]=useState("black")
    const [Check,setCheck]=useState(false)
    
    

  return (
    <div className="App">
    <div className='controls'>
        <label>Horizontal length : </label>
        <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
  
        <label>Verticle length : </label>
        <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />

        <label>Blur : </label>
        <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />


        <label>Color : </label>
        <input type="color"  value={Color} onChange={(e)=>setColor(e.target.value)} />
    
        <br />    
        <br />    

        <div class="switch">
          <label>
            Outline
            <input type="checkbox" checked={Check} onChange={()=>setCheck(!Check)}/>
            <span class="lever"></span>
            Inset
          </label>
        </div>


   </div>
    <div className='output'></div>
        <div className='box' style={{boxShadow:`${Check?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${Color} `}}>
        <p>box-shadow : {Hori}px {Veri}px {Blur}px {Color}</p> 
        </div>
        
    </div> 
  )
}

export default Main
