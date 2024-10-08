import { useState } from "react";
import Button from "./Components/Button/Button";
import randomPassword from "./hooks/randomPassword";
import { useSetCopyText } from "./hooks/setCopyText";

function App() {
  const { randomNumber, password, passWordSize, setPasswordSize } =
    randomPassword();
  const { copyText, copyToClipboard, setCopyText } = useSetCopyText();
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 pt-52">
      <h1 className="text-white text-5xl">Gerador de Senhas</h1>
      <div className="flex  gap-2">
        <label htmlFor="showInput" className="text-white font-bold">
          Customizar tamanho:
        </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => {
            setShowInput((currentState) => {
              return !currentState;
            });
          }}
        />
      </div>
      {showInput ? (
        <div className="flex flex-col gap-2">
          <label htmlFor="passwordSize" className="text-white font-bold">
            Tamanho:{" "}
            <span className="text-red-500">{showInput ? passWordSize : 8}</span>{" "}
            Caracteres
          </label>
          <input
            type="number"
            id="passwordSize"
            min={1}
            value={passWordSize}
            onChange={(ev) => {
              setPasswordSize(ev.target.value);
            }}
            className="rounded-lg py-1 border-4 border-white bg-transparent text-white text-center"
          />
        </div>
      ) : null}

      <div className="flex gap-3">
        <Button
          onClick={() => {
            setCopyText("Copiar");
            randomNumber();
          }}
          nameButton={"Gerar!"}
        />
        <Button
          onClick={() => copyToClipboard(password)}
          nameButton={copyText}
        />
      </div>
      <div className="border-4 border-white w-56 h-10">
        <p className="text-white text-center font-bold">{password}</p>
      </div>
    </div>
  );
}

export default App;
