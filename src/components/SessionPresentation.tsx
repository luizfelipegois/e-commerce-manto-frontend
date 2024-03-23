import Link from "next/link";
import React from "react";

const SessionPresentation = () => {
  return (
    <section className="px-4 lg:px-6">
      <h1 className="text-center w-full font-bold uppercase py-20 lg:py-40">
        Apresentamos
      </h1>
      <div className="lg:flex lg:w-screen">
        <img
          alt="category"
          src="https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover lg:w-[50%] lg:h-screen"
        />
        <div className="flex flex-col items-center justify-center py-10 lg:py-0">
          <p className={`text-[52px] text-neutral-800 uppercase font-light`}>
            Sérum
          </p>
          <p className="text-12px] font-extralight text-neutral-500 my-6 text-center md:w-[50%]">
            Kit com um sérum 10% Peptídeos Matrixyl e um sérum Mix-02 com
            associação de Cafeína, Ácido Tranexâmico e Ácido Ferúlico.
          </p>
          <Link href="#" className="navbar__link relative">
            EXPLORAR
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SessionPresentation;
