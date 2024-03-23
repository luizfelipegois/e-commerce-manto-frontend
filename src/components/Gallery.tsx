"use client";

import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const Gallery = () => {
  const slideData = [
    {
      id: 0,
      img: "https://images.unsplash.com/photo-1677444576947-ea399554a175?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Coleção de Inverno",
      mainTitle: "Para um inverno estiloso e confortável"
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Skin Care",
      mainTitle: "Oléos Essenciais a base de ervas naturais",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1645784127380-77aeb81be500?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Calçados",
      mainTitle: "As melhores opções para seu dia-dia",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1646938863839-4d49ded55765?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fitness",
      mainTitle: "",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bags",
      mainTitle: "Facilite sua rotina e leve com você o essencial",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1624483077147-4e2e5736b75f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Moda Verão",
      mainTitle: "Linho, algodão e muito estilo nesse verão",
    },
  ];

  return (
    <section className="px-4 lg:px-8 py-4 grid grid-cols-1 lg:grid-cols-4 grid-rows-2 lg:grid-rows-2 gap-2 h-full w-full">
      {slideData.map(({ id, img, mainTitle, title }) => (
        <Link href="#" key={id} className={`${id === 0 ? "md:col-span-2" : ""} ${id === 5 ? "md:col-span-2" : ""} relative gallery__card`}>
          <div className="flex flex-col absolute bottom-5 left-5">
            <h1 className={`text-[32px] text-neutral-100`}>{title}</h1>
            <h1 className="text-[16px] text-slate-100 font-regular">{mainTitle}</h1>
          </div>
          <button className="hidden absolute top-5 right-5 bg-[#D8D8DA] p-4 rounded-full gallery__card__button">
            <ArrowUpRightIcon className="h-6 w-6 " />
          </button>
          <img alt="category" src={img} className="w-full h-full object-cover"/>
        </Link>
      ))}
    </section>
  );
};

export default Gallery;
