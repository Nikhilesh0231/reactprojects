import './FAQs.css';
import React, { useState } from 'react'
import {questions} from './Data/FaqsQuestions'

export default function FAQs() {
  let [currentID , setCurrentID] = useState(questions[0].id);
  let items = questions.map((itemData , i)=>{
    let itemDetails={
       itemData,currentID,setCurrentID
    }
    return(
      <FaqItems itemDetails = { itemDetails} key={i}/>
    )
  })
  let name = ['ram','shyam','karan','raju']
  return (
    <div>
      <ul>
    {name.map((items,i)=>{
      return(
        <li key={i}>{items}</li>
      )
    })}
    </ul>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqOuter">
       {items}
    </div>
    </div>
  )
}

function FaqItems({itemDetails}){
  let {itemData,currentID,setCurrentID} = itemDetails;
  return(
    <div className="faqItems">
    <h2 onClick={()=>setCurrentID(itemData.id)}>{itemData.question}</h2>
    <p className={currentID===itemData.id?'activeAns':''}>{itemData.answer}</p>
    </div>
  )

}
