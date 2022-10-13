import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';


import api_cep from "./service/api.js";

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})


async function handleSearch() {
try{
const  response = await api_cep.get(input+'/json');
setCep(response.data)
} catch {
alert("Oops... Nada encontrado, verifique se o cep está correto!")
setInput("")
}
  }

  return (
    <div className="container">
      <h1 className="title">Consulta CEP</h1>
     <div className="containerInput">
<input
type="text"
placeholder="Digite um cep..."
value={input}
onChange={(e) => setInput(e.target.value)}
required
/>

<button className="buttonSearch" onClick={handleSearch}>
  <FiSearch size={25} color="#FFF"/>
</button>
</div>

{Object.keys(cep).length > 0 && (
    <main className='main'>
      <h2>Informações</h2>

      <span>CEP: {cep.cep}</span>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento == "" ? "Nenhum" : cep.complemento}</span>
      <span>Bairro: {cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
      <span>━━━━━━━━━━━━━━━━━━━━━</span>
      <span>IBGE: {cep.ibge != "" ? cep.ibge : "Nada Encontrado"}</span>
      <span>GIA: {cep.gia != "" ? cep.gia : "Nada Encontrado"}</span>
      <span>DDD: {cep.ddd}</span>
      <span>SIAFI: {cep.siafi}</span>
    </main>
)}
</div>
  );
}
export default App;
