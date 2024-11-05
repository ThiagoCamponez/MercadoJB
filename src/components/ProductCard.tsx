// ProductCard.tsx
import Image from "next/image";

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
    <div className="flex flex-col items-center rounded-lg bg-white p-1 shadow-xl">
      <Image
        className="mb-1 h-48 w-full rounded-md object-contain"
        src={`/assets/${produto.imagem}`}
        alt={produto.nome}
        width={200}
        height={200}
      />
      <h3 className="mb-2 text-center text-base font-semibold">{produto.nome}</h3>
      <p className="text-center text-xl font-bold p-2 bg-orange-500 rounded-xl text-white">
        {produto.preco}
      </p>
    </div>
  );
}
