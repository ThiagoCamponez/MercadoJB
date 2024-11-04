"use client";

import { useState } from 'react';
import Image from 'next/image';
import JB from '../assets/JB.png';
import Link from 'next/link';

const produtos = [
  { id: 1, nome: "Sabão em Pó Lavagem Perfeita Omo 1,6kg", preco: "R$27,34", imagem: "omo.jpg" },
  { id: 2, nome: "Bala Fini", preco: "R$5,50", imagem: "bala-fini.jpg" },
  { id: 3, nome: "Casa de Plástico", preco: "R$120,00", imagem: "casa.jpg" },
  { id: 4, nome: "Cebola", preco: "R$3,50", imagem: "cebola.jpg" },
  { id: 5, nome: "Detergente Ypê", preco: "R$2,30", imagem: "detergente-ype.jpg" },
  { id: 6, nome: "Extrato de Tomate Quero", preco: "R$3,80", imagem: "extrato-tomate-quero.jpg" },
  { id: 7, nome: "Farinha Biju", preco: "R$4,99", imagem: "farinha-biju.jpg" },
  { id: 8, nome: "Margarina Qualy", preco: "R$6,99", imagem: "margarina-qualy.jpg" },
  { id: 9, nome: "Milho Fujini", preco: "R$3,20", imagem: "milho-fujini.jpg" },
  { id: 10, nome: "Macarrão Miojo", preco: "R$1,99", imagem: "nissin-miojo.jpg" },
  { id: 11, nome: "Óleo de Soja Coamo", preco: "R$7,80", imagem: "oleo-coamo.jpg" },
  { id: 12, nome: "Papel Higiênico Dueto 12 Unidades", preco: "R$15,00", imagem: "papel-higienico-dueto-12.jpg" },
  { id: 13, nome: "Pinho Sol", preco: "R$9,90", imagem: "pinho-sol.jpg" },
  { id: 14, nome: "Presunto Seara", preco: "R$5,99", imagem: "presunto-seara.jpg" },
  { id: 15, nome: "Queijo Qboa", preco: "R$12,99", imagem: "qboa.jpg" },
  { id: 16, nome: "Tempero Sazon", preco: "R$1,20", imagem: "sazon.jpg" },
  { id: 17, nome: "Suco Tang", preco: "R$0,99", imagem: "suco-tang.jpg" },
  { id: 18, nome: "Vinho do Porto", preco: "R$45,00", imagem: "vinho-porto.jpg" },
  { id: 19, nome: "Carvão 4Kg", preco: "R$15,00", imagem: "carvao-4kg.jpg" },
  { id: 20, nome: "Carvão 7Kg", preco: "R$25,00", imagem: "carvao-7kg.jpg" },
];


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="shadow-lg p-4">
        <div className="mx-auto max-w-screen-xl">
          <nav className='flex w-full items-center justify-between flex-wrap relative'>
            <Link href="/">
              <div className='flex items-center gap-4 md:gap-8'>
                <Image className='h-16 w-16 md:h-32 md:w-32' src={JB} alt='Logomarca do Mercado JB'/>
                <div>
                  <h1 className='text-left text-4xl md:text-6xl font-black text-slate-950'>Mercado <span className='text-orange-600'>JB</span></h1>
                  <p className='text-sm md:text-xl font-bold text-slate-950'>Nossa família atende a sua!</p>
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
              <Link className='font-medium text-slate-950 hover:text-orange-500 transition-colors' href="#hero">Sobre</Link>
              <Link className='font-medium text-slate-950 hover:text-orange-500 transition-colors' href="#hero">Contato</Link>
              <Link className='font-medium text-slate-950 hover:text-orange-500 transition-colors' href="#hero">Localização</Link>
              <Link className='py-2 px-4 md:py-3 md:px-5 font-medium rounded-full bg-orange-500 text-white hover:bg-orange-700 transition-colors' href="#hero">Ofertas</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-screen-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <section className="col-span-1 md:col-span-3 lg:col-span-4 mt-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Produtos em Promoção</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {produtos.map((produto) => (
              <div key={produto.id} className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
                <Image 
                  className="w-full h-48 object-cover rounded-md mb-4" 
                  src={require(`../assets/${produto.imagem}`)} 
                  alt={produto.nome} 
                  width={200} 
                  height={200} 
                />
                <h3 className="text-lg font-semibold mb-2 text-center">{produto.nome}</h3>
                <p className="text-xl font-bold text-orange-500 text-center">{produto.preco}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>© 2024 Mercado JB. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
