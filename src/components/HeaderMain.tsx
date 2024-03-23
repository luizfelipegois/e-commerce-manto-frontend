import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const HeaderMain = () => {
  return (
    <header className="border-b border-gray-200 py-2 px-4 lg:px-6 flex justify-between items-center">
      <h1 className="hidden lg:block font-bold text-[32px] text-neutral-900">
        manto
      </h1>
      <form className="flex items-center rounded-lg w-full lg:w-[800px] relative border-gray-200 border p-2">
        <input
          className="w-full text-[14px] focus:outline-none"
          type="text"
          placeholder="Digite o nome de um produto..."
        />
        <button>
          <MagnifyingGlassIcon className="h-6 w-6 ml-2 text-gray-400" />
        </button>
      </form>
      <nav className="hidden lg:flex gap-4 text-gray-500 items-center">
        <button>
          <UserIcon className="h-6 w-6 " />
        </button>
        <div className="relative items-center flex h-[32px] w-[32px]">
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white text-center">
            0
          </div>
          <button>
            <HeartIcon className="h-6 w-6"/>
          </button>
        </div>
        <div className="relative items-center flex h-[32px] w-[32px]">
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white text-center">
            0
          </div>
          <button>
            <ShoppingBagIcon className="h-6 w-6 " />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMain;
