export default function Localizacao() {
  return (
    <div className="mx-auto max-w-screen-lg p-1">
      <h1 className="mb-8 text-center text-2xl md:text-3xl font-bold">
        Nossa Localização
      </h1>

      <p className="text-center text-base md:text-lg mb-8">
        Visite-nos no Mercado JB! Abaixo você encontra nosso endereço e horário
        de funcionamento.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-4 md:p-6 rounded-lg shadow-md mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-2 md:mb-4">
            Endereço
          </h2>
          <p className="text-center text-sm md:text-base text-gray-700">
            Rua Amazonas, 215 - Centro
          </p>
          <p className="text-center text-sm md:text-base text-gray-700 mb-2 md:mb-4">
            Santa Inês, Paraná - CEP 86660-000
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-2 md:mb-4">
            Horário de Funcionamento
          </h2>
          <p className="text-center text-sm md:text-base text-gray-700">
            Segunda a Sábado: 8h - 19h
          </p>
          <p className="text-center text-sm md:text-base text-gray-700">
            Domingos e Feriados: 8h - 12h
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.1639006756314!2d-51.90407196978723!3d-22.6385644151011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493a92f6a31747b%3A0x2c7f7c4d077a137f!2sMercado%20JB!5e1!3m2!1spt-BR!2sbr!4v1730682183849!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
