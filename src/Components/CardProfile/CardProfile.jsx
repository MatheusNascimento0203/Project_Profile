import PhotoProfile from "../PhotoProfile/PhotoProfile";
import photoMessi from "../../assets/imagens/Lionel_Messi_20180626.jpg";
import NameProfile from "../NameProfile/NameProfile";
import ProfessionProfile from "../ProfessionProfile/ProfessionProfile";
import NumberProfile from "../NumberProfile/NumberProfile";
import EmailProfile from "../EmailProfile/EmailProfile";
import Link from "../Link/Link";
import { useState } from "react";

export default () => {
  return (
    <div className=" w-80 h-fit rounded-lg bg-white flex flex-col gap-5 py-5 items-center">
      <PhotoProfile photo={photoMessi} />
      <div className="w-full">
        <NameProfile nameProfile="Matheus Nascimento" />
        <ProfessionProfile profession="Desenvolvedor FullStack" />
        <NumberProfile number={"(83) 99182-8002"} />
        <EmailProfile email={"matheus@smn.com.br"} />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <Link socialNetwork={"GitHub"} />
        <Link socialNetwork={"LikendIn"} />
        <Link socialNetwork={"Twitter"} />
      </div>
    </div>
  );
};
