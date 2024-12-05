import { useState } from "react";
import { useDentistStates } from "./utils/global.context";


const Form = () => {
  const { state } = useDentistStates();

  const [name,setName] = useState('') 
  const [email,setEmail] = useState('') 

  const [error,setError] = useState('')
  const [showcard,setShowcard] = useState(false)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim().length < 5 || !validateEmail(email)) {
      setError('Por favor verifique su información nuevamente')
      setShowcard(false)
    } else{
      setError('')
      setShowcard(true)
    }
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className="home-container">
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={state.theme === "dark" ? "submit-button-dark" : "submit-button-light"}>Send</button>

      </form>
      {error && <p>{error}</p> }
      {showcard && <p>Gracias {name}, te contactaremos cuando antes vía mail</p> }
    </div>
  );
};

export default Form;