
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
function App() {
  const[input, setInput]=useState('')

  function handlesearch(){
    alert(`VALOR DO INPUT${input}`)

  }
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        volue={input}
        anchange={(e)=>setInput(e.target.velue)}
        />

        <button className="buttonsearch" onClick={handlesearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className='main'>
        <h2>cep: 23012007</h2>

      <span>Rua teste algum</span>
      <span>complemento:Algum complemento</span>
      <span>senador vascon</span>
      <span>Rio de janeiro</span>

      </main>
    </div>
  );
}

export default App;
