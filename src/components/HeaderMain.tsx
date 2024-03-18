import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const HeaderMain = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="ml-6 mr-6 sm:flex justify-between items-center">
        <h1 className="font-bold text-[32px] text-center text-blackish">
          manto
        </h1>
        <div className="w-full p-2 flex items-center rounded-lg sm:w-[300px] md:w-[70%] relative border-gray-200 border">
          <input
            className="w-full text-[14px] focus:outline-none"
            type="text"
            placeholder="Digite o nome de um produto..."
          />
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 ml-2 text-gray-400" />
          </button>
        </div>
        <nav className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <button>
            <UserIcon className="h-6 w-6 " />
          </button>
          <div className="relative">
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
            <button>
              <HeartIcon className="h-6 w-6 " />
            </button>
          </div>
          <div className="relative">
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
            <button>
              <ShoppingBagIcon className="h-6 w-6 " />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
