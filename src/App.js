import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';
import inputs from './utils/inputs';

function App() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  })
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs().map((input) => {
          return <FormInput handleChange={handleChange} key={input.id} {...input} value={formData[input.name]} />
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
