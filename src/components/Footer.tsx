import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="md:h-[600px] bg-black md:flex md:p-20 py-20 px-6 justify-between">
      <div className='flex flex-col'>
        <p className="text-[14px] text-neutral-500 mb-6">Podemos ajudar?</p>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Contate-nos</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Meu pedido</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Perguntas frequentes</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Cancelar inscrição por e-mail</Link>
      </div>
      <div className='flex flex-col'>
        <p className="text-[14px] text-neutral-500 mb-6">A empresa</p>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Sobre Manto</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Carreiras</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Política de Privacidade e Cookies</Link>
      </div>
      <form className='md:w-80'>
        <p className="text-[14px] text-neutral-500 mb-6">Newsletter</p>
        <p className="text-[14px] text-neutral-50 mb-6">Fique por dentro de novidades e lançamento, com a inscrição em nossa Newsletter você recebe em primeira mão nossas melhores novidades</p>
        <div>
          <input className="focus:outline-none focus:ring-0 text-[14px] text-neutral-50 bg-black border-b-[1px] border-neutral-500 w-full py-2" placeholder='E-mail' type="text" />
          <ArrowRightIcon className="h-6 w-6"/>
        </div>
      </form>
    </footer>
  )
}

export default Footer;