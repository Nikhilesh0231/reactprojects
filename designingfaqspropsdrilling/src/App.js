import { NotificationContainer, NotificationManager } from 'react-notifications';
import './App.css';
import FAQs from './FAQs';
import 'react-notifications/lib/notifications.css'

function App() {
  let showNotification=()=>{
      NotificationManager.info("Welcome Nikhilesh")
      NotificationManager.success("success",'Hello Nikhilesh')
      NotificationManager.warning("warning",'Hello Nikhilesh')
      NotificationManager.error("error",'Hello Nikhilesh')
  }
  return (
    <div className="App">
<NotificationContainer/>
<button onClick={showNotification}>SAVE</button>
      <FAQs/>
    </div>
  );
}

export default App;
