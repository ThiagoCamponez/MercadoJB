export default function Sobre() {
  return (
    <div className='mx-auto max-w-screen-lg p-1'>
      <h1 className='mb-8 text-center text-2xl md:text-3xl font-bold'>Sobre Nós</h1>
      
      <p className='text-center text-lg mb-8'>
        Bem-vindo ao Mercado JB! Estamos desde 6 de janeiro de 2021 atendendo em Santa Inês - PR, somos uma empresa familiar que nasceu com o sonho de oferecer à nossa cidade uma experiência de compra única, unindo qualidade e atendimento acolhedor. Com dedicação e carinho, cada produto em nossas prateleiras é selecionado para garantir o melhor para você e sua família.
      </p>

      <p className='text-center text-lg mb-8'>
        O Mercado JB é mais do que um comércio; somos um espaço de convivência e confiança, onde cada cliente faz parte da nossa família. Acreditamos que uma boa experiência de compra vai além dos produtos – é sobre criar um ambiente onde todos se sintam em casa, onde cada sorriso e cada gesto fazem parte do nosso compromisso com você.
      </p>

      <p className='text-center text-lg mb-12'>
        Ao longo dos anos, continuamos a crescer e a fortalecer laços, mantendo sempre os valores que guiaram nossa empresa. Venha fazer parte da nossa história – juntos, somos mais fortes!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
          <h2 className='text-xl font-bold mb-4'>Missão</h2>
          <p>
            Oferecer aos nossos clientes uma experiência de compra excepcional, com produtos de qualidade e atendimento personalizado. Queremos ser referência em confiança, variedade e bons preços para todos os nossos amigos e clientes.
          </p>
        </div>
        
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
          <h2 className='text-xl font-bold mb-4'>Visão</h2>
          <p>
            Ser reconhecido como o supermercado preferido dos nossos clientes, um local onde eles encontram mais do que produtos – encontram confiança, respeito e uma relação de proximidade que fortalece nossa empresa.
          </p>
        </div>
        
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
          <h2 className='text-xl font-bold mb-4'>Valores</h2>
          <p>
            Nossos valores são o alicerce do Mercado JB: honestidade, dedicação, compromisso e respeito por cada cliente e colaborador. Trabalhamos para manter esses princípios em cada detalhe, garantindo uma experiência verdadeira e acolhedora.
          </p>
        </div>
        
      </div>
    </div>
  );
}
