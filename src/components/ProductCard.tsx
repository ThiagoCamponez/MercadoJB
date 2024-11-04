// ProductCard.tsx
import Image from 'next/image';

type Produto = {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
};

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center">
      <Image 
        className="w-full h-48 object-cover rounded-md mb-4" 
        src={`/assets/${produto.imagem}`} 
        alt={produto.nome} 
        width={200} 
        height={200} 
      />
      <h3 className="text-lg font-semibold mb-2 text-center">{produto.nome}</h3>
      <p className="text-xl font-bold text-orange-500 text-center">{produto.preco}</p>
    </div>
  );
}
