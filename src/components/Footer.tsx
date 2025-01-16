const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 text-gray-700">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
        {/* Columna Empresa */}
        <div>
          <h3 className="mb-4 font-bold text-black">EMPRESA</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Envíos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Políticas de garantía
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trabaja con nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* Columna Impuestos */}
        <div>
          <h3 className="mb-4 font-bold text-black">IMPUESTOS</h3>
          <p>
            Todos los precios están expresados en dólares americanos e incluyen
            impuestos.
          </p>
        </div>

        {/* Columna Imágenes */}
        <div>
          <h3 className="mb-4 font-bold text-black">IMÁGENES</h3>
          <p>
            Las imágenes de los productos son meramente ilustrativas. Si desea
            conocer detalles específicos de un producto, por favor póngase en
            contacto con nosotros.
          </p>
        </div>

        {/* Columna Redes Sociales */}
        <div>
          <h3 className="mb-4 font-bold text-black">NUESTRAS REDES</h3>
          <div className="mb-4 flex space-x-4">
            <a href="#" className="hover:text-gray-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-500">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs">
        Thot eCommerce. © 2024. Demóstenes 3532, Montevideo.
      </div>
    </footer>
  );
};

export default Footer;
