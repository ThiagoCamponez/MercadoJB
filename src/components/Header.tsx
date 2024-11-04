"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import JB from "../../public/assets/JB.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-4 shadow-lg bg-white w-full">
      <div className="mx-auto max-w-screen-xl px-1 sm:px-1">
        <nav className="relative flex w-full flex-wrap items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-4 md:gap-8">
              <Image
                className="h-16 w-16 md:h-32 md:w-32"
                src={JB}
                alt="Logomarca do Mercado JB"
              />
              <div>
                <h1 className="text-left text-4xl font-black text-slate-950 md:text-6xl">
                  Mercado <span className="text-orange-600">JB</span>
                </h1>
                <p className="text-sm font-bold text-slate-950 md:text-xl">
                  Nossa família atende a sua!
                </p>
              </div>
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-2xl text-slate-950 focus:outline-none md:hidden"
          >
            <div className="space-y-1">
              <span className="block h-1 w-6 bg-slate-950"></span>
              <span className="block h-1 w-6 bg-slate-950"></span>
              <span className="block h-1 w-6 bg-slate-950"></span>
            </div>
          </button>

          <div
            className={`flex-col items-center gap-4 md:flex md:flex-row md:gap-8 ${
              isMenuOpen ? "flex" : "hidden"
            } absolute right-0 top-full mt-2 rounded-lg bg-white p-4 md:static md:mt-0 md:flex md:bg-transparent md:p-0`}
          >
            <Link
              className="font-medium text-slate-950 transition-colors hover:text-orange-500"
              href="/sobre"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              className="font-medium text-slate-950 transition-colors hover:text-orange-500"
              href="/contato"
              onClick={closeMenu}
            >
              Contato
            </Link>
            <Link
              className="font-medium text-slate-950 transition-colors hover:text-orange-500"
              href="/localizacao"
              onClick={closeMenu}
            >
              Localização
            </Link>
            <Link
              className="rounded-full bg-orange-500 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-700 md:px-5 md:py-3"
              href="/"
              onClick={closeMenu}
            >
              Ofertas
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
