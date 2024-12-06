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

  const validateName = (name) => {
    const re = /^[a-zA-Z\s]+$/;
    return name.trim().length >= 5 && re.test(name);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateName(name)) {
      setError('El nombre debe tener al menos 5 caracteres y solo contener letras.');
      setShowcard(false);
    } else if (!validateEmail(email)) {
      setError('Por favor ingrese un email válido.');
      setShowcard(false);
    } else {
      setError('');
      setShowcard(true);
      setName('');
    setEmail('');
    }
  };

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