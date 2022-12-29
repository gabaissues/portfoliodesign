import React from 'react';

const HeaderComponent = () => {
    return(
        <header id="header" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" className="flex flex-col max-w-5xl">

            <div className="mb-10 flex flex-col justify-center items-center w-full">

              <h1 className="text-[32px] w-[20rem] md:text-[52px] font-semibold md:w-[30rem] text-center">Precisa de um UI/UX Designer? Está no lugar certo!</h1>

            </div>
            <a href="#projects" className='animate-bounce flex items-center justify-center decoration-none'>

              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#503D77" />
                <path d="M20.2 13.8L20.2 28.2M20.2 28.2L26.2 22.8269M20.2 28.2L14.2 22.8269" stroke="white" strokeWidth="2" />
              </svg>

            </a>

          </header>
    )
}

export default HeaderComponent;