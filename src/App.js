/*

Pontificia Universidade Católica do Paraná
Nome: Mateus VInicius Franco Agre
Disciplina: Tecnologias Para Desenvolvimento Web
Professor: Felipe Elias

*/
import React, { useState } from 'react';
import "./App.css";

function App() {
  //React states
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  //Condição de Login
   const handleLogin = () => {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  //Layout da página (label sem nome (email ou senha) para corresponder a imagem do app do exercício)
  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <label></label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label></label>
        <input
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;