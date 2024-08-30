import { useState } from "react";
import Button from "./Components/Button/Button";
import randomPassword from "./hooks/randomPassword";

function App() {
  const { randomNumber, password } = randomPassword();
  return (
    <div className="flex flex-col items-center gap-4 pt-52">
      <h1 className="text-white text-5xl">Gerador de Senhas</h1>
      <div className="flex gap-3">
        <Button onClick={randomNumber} nameButton={"Gerar!"} />
        <Button nameButton={"Copiar"} />
      </div>
      <div className="border-4 border-white w-56 h-10">
        <p className="text-white text-center font-bold">{password}</p>
      </div>
    </div>
  );
}

export default App;
