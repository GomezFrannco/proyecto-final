function Footer() {
  return (
    <footer className='border-t-gray-700 border-t-[1px]'>
      <div className='flex justify-between py-[50px] px-[80px]'>
        <div className="text-4xl font-bold">LOGO</div>
        <div className='flex row justify-between w-[60%]'>
          <div className='col-md-4'>
            <h3 className='text-2xl font-bold'>Contacto</h3>
            <p className='text-gray-700'>Dirección</p>
            <p className='text-gray-700'>Teléfono</p>
            <p className='text-gray-700'>Email</p>
          </div>
          <div className='col-md-4'>
            <h3 className='text-2xl font-bold'>Enlaces</h3>
            <ul className="w-auto">
              <li>
                <a className='text-gray-700' href='#'>
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a className='text-gray-700' href='#'>
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h3 className='text-2xl font-bold'>Redes sociales</h3>
            <ul>
              <li>
                <a className='text-gray-700' href='#'>
                  Facebook
                </a>
              </li>
              <li>
                <a className='text-gray-700' href='#'>
                  Twitter
                </a>
              </li>
              <li>
                <a className='text-gray-700' href='#'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-[5px] px-[80px] bg-black">
        <p className="text-white">
          ©SNKRS 2022 
        </p>
        <p className="text-white">Made by: Franco Gomez</p>
      </div>
    </footer>
  );
}

export default Footer;
