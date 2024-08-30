import { useState } from "react";

export default () => {
  const [copyText, setCopytext] = useState("Copiar");

  const copyToClipboard = (value) => {
    window.navigator.clipboard.writeText(value);
    setCopytext("Copiado!");
  };
  return { copyText, copyToClipboard };
};
