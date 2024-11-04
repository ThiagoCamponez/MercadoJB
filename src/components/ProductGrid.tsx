import ProductCard from "./ProductCard";

const produtos = [
  {
    id: 1,
    nome: "Sabão em Pó Lavagem Perfeita Omo 1,6kg",
    preco: "R$27,34",
    imagem: "omo.jpg",
  },
  { id: 2, nome: "Bala Fini", preco: "R$5,50", imagem: "bala-fini.jpg" },
  { id: 3, nome: "Casa de Plástico", preco: "R$9,00", imagem: "casa.jpg" },
  { id: 4, nome: "Cebola", preco: "R$3,50", imagem: "cebola.jpg" },
  {
    id: 5,
    nome: "Detergente Ypê",
    preco: "R$2,30",
    imagem: "detergente-ype.jpg",
  },
  {
    id: 6,
    nome: "Extrato de Tomate Quero",
    preco: "R$3,80",
    imagem: "extrato-tomate-quero.jpg",
  },
  { id: 7, nome: "Farinha Biju", preco: "R$4,99", imagem: "farinha-biju.jpg" },
  {
    id: 8,
    nome: "Margarina Qualy",
    preco: "R$6,99",
    imagem: "margarina-qualy.jpg",
  },
  { id: 9, nome: "Milho Fujini", preco: "R$3,20", imagem: "milho-fujini.jpg" },
  {
    id: 10,
    nome: "Macarrão Miojo",
    preco: "R$1,99",
    imagem: "nissin-miojo.jpg",
  },
  {
    id: 11,
    nome: "Óleo de Soja Coamo",
    preco: "R$7,80",
    imagem: "oleo-coamo.jpg",
  },
  {
    id: 12,
    nome: "Papel Higiênico Dueto 12 Unidades",
    preco: "R$15,00",
    imagem: "papel-higienico-dueto-12.jpg",
  },
  { id: 13, nome: "Pinho Sol", preco: "R$9,90", imagem: "pinho-sol.jpg" },
  {
    id: 14,
    nome: "Presunto Seara",
    preco: "R$5,99",
    imagem: "presunto-seara.jpg",
  },
  { id: 15, nome: "Queijo Qboa", preco: "R$12,99", imagem: "qboa.jpg" },
  { id: 16, nome: "Tempero Sazon", preco: "R$1,20", imagem: "sazon.jpg" },
  { id: 17, nome: "Suco Tang", preco: "R$0,99", imagem: "suco-tang.jpg" },
  {
    id: 18,
    nome: "Vinho do Porto",
    preco: "R$45,00",
    imagem: "vinho-porto.jpg",
  },
  { id: 19, nome: "Carvão 4Kg", preco: "R$15,00", imagem: "carvao-4kg.jpg" },
  { id: 20, nome: "Carvão 7Kg", preco: "R$25,00", imagem: "carvao-7kg.jpg" },
];

export default function ProductGrid() {
  return (
    <section className="col-span-1 mt-8 md:col-span-3 lg:col-span-4">
      <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold">
        Produtos em Promoção
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}
