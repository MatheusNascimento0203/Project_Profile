import { useState } from "react";

export const useSetCopyText = () => {
  const [copyText, setCopyText] = useState("Copiar");

  const copyToClipboard = (value) => {
    window.navigator.clipboard.writeText(value);
    setCopyText("Copiado!");
  };
  return { copyText, copyToClipboard, setCopyText };
};
