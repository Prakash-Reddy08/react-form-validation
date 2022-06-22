import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [username, setUsername] = useState("")
  return (
    <div className="App">
      <form>
        <FormInput placeholder="UserName" setUsername={setUsername} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="something" />
      </form>
    </div>
  );
}

export default App;
