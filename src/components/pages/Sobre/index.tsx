/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SobreComponent = () => {
    return(
        <section id="about" className='mt-20 flex m-2 justify-center items-center flex-col max-w-5xl'>
            <div className='flex w-full justify-center md:justify-start items-center'>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_148_692)">
                  <path d="M22.5 20.3625C23.9918 20.3625 25.4226 19.7699 26.4775 18.715C27.5324 17.6601 28.125 16.2293 28.125 14.7375C28.125 13.2456 27.5324 11.8149 26.4775 10.76C25.4226 9.70512 23.9918 9.11249 22.5 9.11249C21.0082 9.11249 19.5774 9.70512 18.5225 10.76C17.4676 11.8149 16.875 13.2456 16.875 14.7375C16.875 16.2293 17.4676 17.6601 18.5225 18.715C19.5774 19.7699 21.0082 20.3625 22.5 20.3625Z" fill="black" />
                  <path d="M4.5 2.25C3.30653 2.25 2.16193 2.72411 1.31802 3.56802C0.474106 4.41193 0 5.55653 0 6.75L0 27C0 28.1935 0.474106 29.3381 1.31802 30.182C2.16193 31.0259 3.30653 31.5 4.5 31.5H31.5C32.6935 31.5 33.8381 31.0259 34.682 30.182C35.5259 29.3381 36 28.1935 36 27V6.75C36 5.55653 35.5259 4.41193 34.682 3.56802C33.8381 2.72411 32.6935 2.25 31.5 2.25H4.5ZM2.25 6.75C2.25 6.15326 2.48705 5.58097 2.90901 5.15901C3.33097 4.73705 3.90326 4.5 4.5 4.5H9V9H2.25V6.75ZM11.25 29.25V4.5H31.5C32.0967 4.5 32.669 4.73705 33.091 5.15901C33.5129 5.58097 33.75 6.15326 33.75 6.75V27C33.75 27.6413 33.48 28.2218 33.0525 28.6313C31.8375 25.8615 28.8495 22.5 22.5 22.5C15.6667 22.5 12.7238 26.3925 11.7045 29.25H11.25ZM2.25 24.75H9V29.25H4.5C3.90326 29.25 3.33097 29.0129 2.90901 28.591C2.48705 28.169 2.25 27.5967 2.25 27V24.75ZM9 22.5H2.25V18H9V22.5ZM9 15.75H2.25V11.25H9V15.75Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_148_692">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className='text-[24px] font-semibold pl-2'>Sobre</h1>
            </div>

            <div className='flex max-w-4xl justify-center items-center flex-wrap md:flex-nowrap'>

              <p className="text-center mt-5 mb-5 md:mb-0 md:mt-0 md:text-left w-auto">Profissional na área a mais de 2 anos, sempre buscando a aprender mais. Sou UI/UX Designer, FrontEnd e BackEnd developer. Meu objetivo é sempre alavancar seu projeto, seja ele com caracteristicas que você me pedir ou eu sugerir. Sempre busco priorizar a experiência do usuário ao navegar no seu site.</p>
              <img alt='Meu personagem' className='ml-9  w-52 rounded-full' src='eu.png' />

            </div>
          </section>
    )
}

export default SobreComponent