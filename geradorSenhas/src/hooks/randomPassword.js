import { useState } from "react";

export default () => {
  const [password, setPassword] = useState("");
  const [passWordSize, setPasswordSize] = useState(6);
  const randomNumber = () => {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passWordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
  };
  return { randomNumber, password, passWordSize, setPasswordSize };
};

// const number = Math.floor(Math.random() * (max - min + 1) + min);
// setPassword((prevPassword) => prevPassword + number);
