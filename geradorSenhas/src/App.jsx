import Button from "./Components/Button/Button";
import randomPassword from "./hooks/randomPassword";
import setCopyText from "./hooks/setCopyText";

function App() {
  const { randomNumber, password } = randomPassword();
  const { copyText, copyToClipboard } = setCopyText();
  return (
    <div className="flex flex-col items-center gap-4 pt-52">
      <h1 className="text-white text-5xl">Gerador de Senhas</h1>
      <div className="flex gap-3">
        <Button onClick={randomNumber} nameButton={"Gerar!"} />
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
