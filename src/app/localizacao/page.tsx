export default function Localizacao() {
    return (
      <div className="mx-auto max-w-screen-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nossa Localização</h1>
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
  