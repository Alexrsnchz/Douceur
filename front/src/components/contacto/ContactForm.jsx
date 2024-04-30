import { Form, Link } from 'react-router-dom';
import contacto_background from '../../assets/img_contacto/contacto_background.jpg';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div
      className="bg-gray-100 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${contacto_background})` }}
    >
      <div className="px-4 md:px-10 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row">
          <div className="bg-slate-50 text-[#333333] p-6 lg:w-1/2">
            <div>
              <h1 className="text-4xl font-bold text-center mb-4 text-[#333333]">
                ¿Tienes dudas?
              </h1>
              <h2 className="text-3xl text-center mb-4 text-gray-700">
                Contáctanos
              </h2>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <p className="text-center mb-6 mt-6 text-gray-700 leading-relaxed">
              Si tienes alguna duda sobre los productos que ofrecemos, nuestros
              establecimientos o cualquier otra cosa, puedes enviarnos un correo
              a través de este formulario o llamarnos por teléfono.
            </p>
            <p className="text-center mb-6 text-gray-700 leading-relaxed">
              En breve nos pondremos en contacto contigo y responderemos
              cualquier tipo de duda que tengas.
            </p>
            <p className="text-center mb-6 text-gray-700 leading-relaxed">
              Adicionalmente, si tienes alguna sugerencia sobre algo que podamos
              mejorar haznoslo saber! Estamos comprometidos con poder brindarte
              la mejor experiencia posible al usar nuestros servicios.
            </p>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
          </div>
          <div className="backdrop-blur-sm bg-white/70  text-[#333333] p-6 lg:w-1/2">
            <div className="max-w-md mx-auto my-10">
              <Form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      className="w-full rounded-md border-gray-400 focus:border-gray-600 focus:ring-gray-600 p-3 text-base"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-md border-gray-400 focus:border-gray-600 focus:ring-gray-600 p-3 text-base"
                      type="text"
                      placeholder="Apellidos"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-md border-gray-400 focus:border-gray-600 focus:ring-gray-600 p-3 text-base"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full h-32 rounded-md border-gray-400 focus:border-gray-600 focus:ring-gray-600 p-3 text-base"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                  <div className="flex items-center space-x-2 font-semibold text-[#333333] text-base">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-[#333333] accent-[#7A5F43]"
                    />
                    <div>He leído y acepto la</div>
                    <label>
                      <Link
                        to="/politica-privacidad"
                        className="hover:text-[#785964]"
                      >
                        política de privacidad
                      </Link>
                    </label>
                  </div>

                  <div>
                    <button
                      className="bg-slate-50 text-[#333333] py-2 px-8 rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 font-semibold text-md"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
