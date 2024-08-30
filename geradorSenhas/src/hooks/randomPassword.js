import { useState } from "react";

export default () => {
  const [password, setPassword] = useState("");

  const randomNumber = () => {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
  };
  return { randomNumber, password };
};

// const number = Math.floor(Math.random() * (max - min + 1) + min);
// setPassword((prevPassword) => prevPassword + number);
