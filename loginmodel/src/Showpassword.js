import React from 'react'
import { useState } from 'react';
import './Showpassword.css'



export default function ShowPassword() {
  let [pstatus ,setpstatus] = useState(false);

  let [modelstat,setmodelstat] = useState(false);

  return (<>
    <div className='container'>
      <input className='input' type={(pstatus)?'text':'password'} />
      <button className='btn' onClick={()=>setpstatus(!pstatus)}>{(pstatus)?'Hide':'Show'}</button>
      <button className='btn'onClick={()=>setmodelstat(true)}>Enquire Now</button>
      </div>

    <div onClick={()=>setmodelstat(false)} className={ `modeloverlay ${modelstat ? 'modeloverplayShow':''}` }> 
        
        </div>
        <div className={ `model ${modelstat ? 'modelShow':''}` } >
        <h3>Enquiry Now <span onClick={()=>setmodelstat(false)} >&times;</span></h3> 
        
        </div>
      </>  
  )
}
