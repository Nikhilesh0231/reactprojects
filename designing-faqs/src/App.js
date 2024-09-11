// FAQs created without prop drilling
import { useState } from 'react';
import './App.css';
import { questions } from './Data/FAQsQuestions';

function App() {
  let [showAns,setShowAns] = useState(questions[0].id);
  return (
    <div className="App">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqOuter">
        {questions.map((faqItems,i)=>{
          return(
          <div className="faqItems">
          <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
          <p className={showAns===faqItems.id?'activeAns':''}>{faqItems.answer}</p>
          </div>
        )
      }        
     )
    }

    
      </div>
    </div>
  );
}

export default App;
