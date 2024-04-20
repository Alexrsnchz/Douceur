import { Link } from 'react-router-dom';
import contacto_banner from '../../assets/img_contacto/contacto_banner.png';
import shop_icon from '../../assets/img_contacto/shop_icon.svg';

function FindUs() {
  return (
    <>
      <div className="relative">
        <img
          src={contacto_banner}
          alt="Banner de la página"
          className="brightness-50 w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold shadow-lg bg-opacity-40 rounded-lg flex items-center">
              Visita nuestras tiendas
            </h1>
            <p className="hidden sm:block mt-1 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-center">
              Encuéntranos en tu ciudad más cercana
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
        <div className="bg-[#FFE4C4] text-[#333333] p-4 flex flex-col items-center justify-center">
          <div className="text-center py-3 lg:py-5">
            <img
              src={shop_icon}
              alt="Icono de tienda"
              className="w-10 h-auto mx-auto mb-3 lg:mb-4"
            />
            <div>
              <span className="font-semibold text-lg lg:text-xl">
                Douceur Almería
              </span>
              <p className="text-[#333333] text-sm lg:text-base">
                <Link
                  to="https://maps.app.goo.gl/xoGeRkvBmH5jNDKX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#785964]"
                >
                  Calle Motril 24, 04007 Almería
                </Link>
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Horario
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                Lunes a Viernes
              </p>
              <p className="text-[#6B7280] text-xs lg:text-sm">
                9:00 - 13:30 | 17:30 - 20:00
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Teléfono
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                +34 612 945 172
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E8C7A7] text-[#333333] p-4 flex flex-col items-center justify-center">
          <div className="text-center py-3 lg:py-5">
            <img
              src={shop_icon}
              alt="Icono de tienda"
              className="w-10 h-auto mx-auto mb-3 lg:mb-4"
            />
            <div>
              <span className="font-semibold text-lg lg:text-xl">
                Douceur Roquetas de Mar
              </span>
              <p className="text-[#333333] text-sm lg:text-base">
                <Link
                  to="https://maps.app.goo.gl/ZCcuCvUao35ZR3717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#785964]"
                >
                  Plaza Roma 5, 04740 Roquetas de Mar
                </Link>
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Horario
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                Lunes a Viernes
              </p>
              <p className="text-[#6B7280] text-xs lg:text-sm">
                9:30 - 13:00 | 16:30 - 20:00
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Teléfono
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                +34 672 239 019
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFDAB9] text-[#333333] p-4 flex flex-col items-center justify-center">
          <div className="text-center py-3 lg:py-5">
            <img
              src={shop_icon}
              alt="Icono de tienda"
              className="w-10 h-auto mx-auto mb-3 lg:mb-4"
            />
            <div>
              <span className="font-semibold text-lg lg:text-xl">
                Douceur Aguadulce
              </span>
              <p className="text-[#333333] text-sm lg:text-base">
                <Link
                  to="https://maps.app.goo.gl/oe932FC4DdRYuVH68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#785964]"
                >
                  Calle Sicilia 18, 04720 Aguadulce
                </Link>
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Horario
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                Lunes a Viernes
              </p>
              <p className="text-[#6B7280] text-xs lg:text-sm">
                9:00 - 14:00 | 17:30 - 20:00
              </p>
            </div>
            <hr className="border-[#333333] my-2 lg:my-3 w-full" />
            <div>
              <span className="font-semibold text-sm lg:text-base">
                Teléfono
              </span>
              <p className="text-[#333333] text-xs lg:text-sm">
                +34 646 576 237
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindUs;
