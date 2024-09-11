import React from 'react'
import { useState } from 'react';


export default function ShowPassword() {
  let [pstatus ,setpstatus] = useState(false);

  return (
    <div className='container'>
      <input className='input' type={(pstatus)?'text':'password'} />
      <button className='btn' onClick={()=>setpstatus(!pstatus)}>{(pstatus)?'Hide':'Show'}</button>
    </div>
  )
}
