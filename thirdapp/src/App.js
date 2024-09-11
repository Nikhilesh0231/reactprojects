import './App.css';
import { useState } from 'react';
import btnModule from './Button.module.css'

function App() {
  let [status, setstatus] = useState(false);
  return (
    <div className="App">
      <button className={btnModule.error}>Error</button>
      <button className={btnModule.warning}>Demo</button>
      {(status)?
      <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dolores praesentium exercitationem eaque quidem adipisci iusto amet quo, quasi reprehenderit quos ea, explicabo consequatur eveniet dicta? Ducimus accusamus, inventore perspiciatis aperiam ratione totam blanditiis ad culpa molestias nemo neque mollitia nisi quasi qui et! Dolor tenetur vel quidem tempore velit facere nemo ex, quod quasi corrupti.</p>
      :
      ""
       }
    <button onClick={()=>setstatus(!status)}>{(status)?"Hide":"Show"}</button>
    </div>
  );
}

export default App;
