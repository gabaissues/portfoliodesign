import React from 'react';

const FooterComponent = () => {
  return (
    <footer id="footer" className='flex flex-col md:flex-row justify-center items-center flex-wrap mt-10 bg-[#503D77] p-12 w-full'>
      <div className='flex flex-col md:flex-row max-w-5xl items-center'>
        <div>
          <h1 className='text-[24px] text-[#fff] font-bold text-center md:text-left'>Gabriel</h1>
          <h2 className='text-[16px] text-[#fff] font-medium'>gabaissues@gmail.com</h2>
        </div>
        <div className='flex mt-10 md:mt-0 md:ml-[25rem]'>

          <a href="https://gabrielj.dev" className='text-[24px] text-[#fff] font-bold'>Ir para o portfólio de Dev</a>

        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;