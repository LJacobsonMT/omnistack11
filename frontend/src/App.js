import React from 'react';

import './global.css';

import Routes from './routes';

// JSX

function App() {
  return (
    <Routes />
  );
}

export default App;

  // const [counter, setCounter] = useState(0);
  // // Return Array [valor, funcao de atualização]

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // return (
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={increment}>
  //       Incrementar
  //     </button>
  //   </div>
  // );