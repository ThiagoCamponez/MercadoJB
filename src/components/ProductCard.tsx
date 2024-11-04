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
    <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-lg">
      <Image
        className="mb-4 h-48 w-full rounded-md object-contain"
        src={`/assets/${produto.imagem}`}
        alt={produto.nome}
        width={200}
        height={200}
      />
      <h3 className="mb-2 text-center text-lg font-semibold">{produto.nome}</h3>
      <p className="text-center text-xl font-bold text-orange-500">
        {produto.preco}
      </p>
    </div>
  );
}
