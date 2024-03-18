import React from 'react'

const HeaderTop = () => {
  return (
    <header className="border-b border-gray-200 hidden sm:block">
      <div className="py-1 ml-6 mr-6">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <button className="text-[14px] mr-1 hover:text-gray-600">ENTRAR</button>
            <button className="text-[14px] hover:text-gray-600">CADASTRAR</button>
          </div>
          <div className="text-gray-800 text-[14px]">
            <b>FRETE GRÁTIS</b> ESSA SEMANA PEDIDO ACABOU - R$ 250,00
          </div>
          <div className="flex gap-4">
            <select name="currency" id="currency" className="text-gray-800 text-[14px] cursor-pointer hover:text-gray-600">
              <option value="BRL R$">BRL R$</option>
              <option value="EUR €">EUR €</option>
              <option value="USD $">USD $</option>
            </select>
            <select name="language" id="language" className="text-gray-800 text-[14px] cursor-pointer hover:text-gray-600">
              <option value="Português">Português</option>
              <option value="Inglês">Inglês</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderTop;