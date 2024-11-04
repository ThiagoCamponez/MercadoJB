"use client";

import { useState } from 'react';
import Image from 'next/image';
import JB from '../../public/assets/JB.png';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg p-4">
      <div className="mx-auto max-w-screen-xl">
        <nav className="flex w-full items-center justify-between flex-wrap relative">
          <Link href="/">
            <div className="flex items-center gap-4 md:gap-8">
              <Image className="h-16 w-16 md:h-32 md:w-32" src={JB} alt="Logomarca do Mercado JB" />
              <div>
                <h1 className="text-left text-4xl md:text-6xl font-black text-slate-950">Mercado <span className="text-orange-600">JB</span></h1>
                <p className="text-sm md:text-xl font-bold text-slate-950">Nossa família atende a sua!</p>
              </div>
            </div>
          </Link>

          <button onClick={toggleMenu} className="md:hidden text-slate-950 text-3xl focus:outline-none">
            <div className="space-y-1">
              <span className="block h-1 w-8 bg-slate-950"></span>
              <span className="block h-1 w-8 bg-slate-950"></span>
              <span className="block h-1 w-8 bg-slate-950"></span>
            </div>
          </button>

          <div className={`flex-col md:flex md:flex-row gap-4 md:gap-8 items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute top-full right-0 mt-2 bg-white p-4 rounded-lg md:static md:mt-0 md:bg-transparent md:p-0`}>
            <Link className="font-medium text-slate-950 hover:text-orange-500 transition-colors" href="/sobre">Sobre</Link>
            <Link className="font-medium text-slate-950 hover:text-orange-500 transition-colors" href="/contato">Contato</Link>
            <Link className="font-medium text-slate-950 hover:text-orange-500 transition-colors" href="/localizacao">Localização</Link>
            <Link className="py-2 px-4 md:py-3 md:px-5 font-medium rounded-full bg-orange-500 text-white hover:bg-orange-700 transition-colors" href="/">Ofertas</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
