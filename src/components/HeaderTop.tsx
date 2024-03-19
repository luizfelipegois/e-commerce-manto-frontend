import React from "react";

const HeaderTop = () => {
  return (
    <header className="bg-black h-10 px-4 justify-center items-center flex">
      {/* <div className="hidden lg:flex gap-1">
          <button className="text-[14px] mr-1 hover:text-gray-600">ENTRAR</button>
          <button className="text-[14px] hover:text-gray-600">CADASTRAR</button>
        </div> */}
      <div className="text-gray-200 text-[12px] lg:text-[14px]">
        <b>FRETE GRÁTIS</b> ESSA SEMANA PEDIDO MÍNIMO - R$ 250,00
      </div>
      {/* <div className="flex gap-4">
          <select name="currency" id="currency" className="text-gray-800 text-[14px] cursor-pointer hover:text-gray-600">
            <option value="BRL R$">BRL R$</option>
            <option value="EUR €">EUR €</option>
            <option value="USD $">USD $</option>
          </select>
          <select name="language" id="language" className="text-gray-800 text-[14px] cursor-pointer hover:text-gray-600">
            <option value="Português">Português</option>
            <option value="Inglês">Inglês</option>
          </select>
        </div> */}
    </header>
  );
};

export default HeaderTop;
