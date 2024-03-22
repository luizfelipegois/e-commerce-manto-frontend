import Link from "next/link";
import React from "react";

const SessionPresentation = () => {
  const bestSellerData = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sérum",
      mainTitle: "Kit com um sérum 10% Peptídeos Matrixyl e um sérum Mix-02 com associação de Cafeína, Ácido Tranexâmico e Ácido Ferúlico.",
    }
  ];

  return (
    <section className="px-4 md:mb-80">
      <h1 className="text-center w-full font-semibold uppercase md:py-32 py-20">
        Apresentamos
      </h1>
      {bestSellerData.map(({ id, title, img, mainTitle }) => (
        <div key={id} className="w-full h-screen grid md:grid-cols-2">
          <img
            alt="category"
            src={img}
            className="object-cover"
          />
          <div className="flex flex-col items-center justify-center">
            <p className={`text-[52px] text-neutral-800 uppercase font-light`}>
              {title}
            </p>
            <p className="text-12px] font-extralight text-neutral-500 my-6 text-center md:w-[50%]">
              {mainTitle}
            </p>
            <Link href="#" key={id} className="navbar__link relative">EXPLORAR</Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SessionPresentation;
