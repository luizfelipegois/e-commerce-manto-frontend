import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <nav className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative text-[14px]" href="#">INÍCIO</Link>
          <Link className="navbar__link relative text-[14px]" href="#">BEST SELLERS</Link>
          <Link className="navbar__link relative text-[14px]" href="#">MULHER</Link>
          <Link className="navbar__link relative text-[14px]" href="#">HOMEM</Link>
          <Link className="navbar__link relative text-[14px]" href="#">ACESSÓRIOS</Link>
          <Link className="navbar__link relative text-[14px]" href="#">SKIN CARE</Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar