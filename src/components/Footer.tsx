import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 lg:flex lg:justify-between lg:px-6">
      <div className='flex flex-col mb-10'>
        <p className="text-[14px] text-neutral-500 mb-4">Podemos ajudar?</p>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Contate-nos</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Meu pedido</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Perguntas frequentes</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50" href="#">Cancelar inscrição por e-mail</Link>
      </div>
      <div className='flex flex-col mb-10'>
        <p className="text-[14px] text-neutral-500 mb-4">A empresa</p>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Sobre Manto</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50 mb-6" href="#">Carreiras</Link>
        <Link className="navbar__link relative text-[14px] text-neutral-50" href="#">Política de Privacidade e Cookies</Link>
      </div>
      <form className='w-full lg:w-[400px]'>
        <p className="text-[14px] text-neutral-500 mb-4">Newsletter</p>
        <p className="text-[14px] text-neutral-50 mb-4">Fique por dentro de novidades e lançamento, com a inscrição em nossa Newsletter você recebe em primeira mão nossas melhores novidades</p>
        <input className="focus:outline-none focus:ring-0 text-[14px] text-neutral-50 bg-black border-b-[1px] border-neutral-500 w-full py-2" placeholder='E-mail' type="text" />
      </form>
    </footer>
  )
}

export default Footer;