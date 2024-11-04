import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className='mx-auto max-w-screen-lg p-1'>
      <h1 className='mb-8 text-center text-2xl md:text-3xl font-bold'>Fale Conosco</h1>
      
      <p className='text-center text-lg mb-8'>
        Entre em contato conosco pelos nossos canais abaixo. Ficaremos felizes em atendê-lo.
      </p>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        {/* Contato por E-mail */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <FaEnvelope className='text-4xl text-blue-500 mb-4' />
          <h2 className='text-xl font-bold mb-2'>E-mail</h2>
          <p className='text-gray-700'>Envie-nos um e-mail:</p>
          <a href="mailto:leandrocamponez@gmail.com" className='text-blue-500 font-semibold'>
            leandrocamponez@gmail.com
          </a>
        </div>
        
        {/* Contato por WhatsApp */}
        <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <FaWhatsapp className='text-4xl text-green-500 mb-4' />
          <h2 className='text-xl font-bold mb-2'>WhatsApp</h2>
          <p className='text-gray-700'>Mande uma mensagem:</p>
          <a href="https://wa.me/5518997340380" target="_blank" rel="noopener noreferrer" className='text-green-500 font-semibold'>
            (18) 99734-0380
          </a>
        </div>
        
      </div>
    </div>
  );
}
