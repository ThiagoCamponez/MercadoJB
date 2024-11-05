import ProductCard from "./ProductCard";

const produtos = [
  { id: 1, nome: "Sabão em Pó Omo 1,6kg", preco: "R$ 24,90", imagem: "omo.jpg" },
  { id: 2, nome: "Detergente Ypê", preco: "R$ 2,49", imagem: "detergente-ype.jpg" },
  { id: 3, nome: "Limpador Casa 1L", preco: "R$ 9,90", imagem: "casa.jpg" },
  { id: 4, nome: "Esponja Jeitosa", preco: "R$ 1,00", imagem: "esponja-jeitosa.png" },
  { id: 5, nome: "Esponja BomBril", preco: "R$ 2,99", imagem: "bombril.jpg" },
  { id: 6, nome: "Qboa 1L", preco: "R$ 3,49", imagem: "qboa1L.jpg" },
  { id: 7, nome: "Vinagre Chemim 900ml", preco: "R$ 2,69", imagem: "vinagre-chemim.jpg" },
  { id: 8, nome: "Papel Hig. Dueto 12 Rolos", preco: "R$ 17,99", imagem: "papel-hig.-dueto-12.jpg" },
  { id: 9, nome: "Arroz Valicel 5kg", preco: "R$ 29,90", imagem: "arroz-valicel.jpg" },
  { id: 10, nome: "Cebola", preco: "R$ 3,50", imagem: "cebola.jpg" },
  { id: 11, nome: "Extrato de Tomate", preco: "R$ 2,99", imagem: "extrato-tomate-quero.jpg" },
  { id: 12, nome: "Margarina Qualy", preco: "R$ 7,90", imagem: "margarina-qualy.jpg" },
  { id: 13, nome: "Macarrão Miojo", preco: "R$ 2,90", imagem: "nissin-miojo.jpg" },
  { id: 14, nome: "Óleo de Soja Coamo", preco: "R$ 6,99", imagem: "oleo-coamo.jpg" },
  { id: 15, nome: "Milho ou Quirera", preco: "R$ 11,50", imagem: "milho-valicel.jpg" },
  { id: 16, nome: "Maionese Hellmann's 500g", preco: "R$ 9,90", imagem: "hellmans.jpg" },
  { id: 17, nome: "Leite Ferm. Bob Esponja", preco: "R$ 7,90", imagem: "bob-esponja.jpg" },
  { id: 18, nome: "Macarrão Galo 500g", preco: "R$ 4,90", imagem: "macarrao-galo.jpg" },
  { id: 19, nome: "Feijão Valicel 1kg", preco: "R$ 7,90", imagem: "feijao-valicel.jpg" },
  { id: 20, nome: "Leite Integral Líder 1L", preco: "R$ 5,99", imagem: "leite-lider.jpg" },
  { id: 21, nome: "Lâmpada Led OuroLux 6v", preco: "R$ 2,99", imagem: "ourolux-6v.jpg" },
  { id: 22, nome: "Barbante várias cores", preco: "R$ 19,90", imagem: "barbante-cia-textil.jpg" },
  { id: 23, nome: "Carvão 4Kg", preco: "R$ 15,00", imagem: "carvao-4kg.jpg" },
  { id: 24, nome: "Carvão 7Kg", preco: "R$ 25,00", imagem: "carvao-7kg.jpg" }
];


export default function ProductGrid() {
  return (
    <section className="col-span-2 mt-8 md:col-span-3 lg:col-span-4">
      <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold">
        Produtos em Promoção
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}
