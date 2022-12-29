import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Controller, Navigation, Pagination, Scrollbar } from 'swiper';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ProjectCardComponent from './ProjectCard';


const ProjectsComponent = () => {
  const [controlledSwiper, setControlledSwiper] = React.useState<any>();//Não achei  o TYPE do Controller
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {

    if(!controlledSwiper) return;
    controlledSwiper.slideNext()

  }

  const handlePrev = () => {
    
    if(!controlledSwiper) return;
    controlledSwiper.slidePrev()

  }

  React.useEffect(() => {

    setLoading(true)

  }, [])
  
  const isMobile = !useMediaQuery('(min-width: 768px)');
  if(!loading) return <div>Loading...</div>
  
  return (
    <section id="projects" className='mt-16 flex flex-col max-w-5xl'>
      <h1 className='text-center text-[24px] font-semibold pl-2'>Projetos</h1>

      <div className='ml-6 mr-6 mb-5 w-full mt-8'>
        <Swiper
          className="mx-auto w-full"
          modules={[Controller]}
          onSwiper={setControlledSwiper}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          slidesPerView={isMobile ? 1 : 3}
        >
          <SwiperSlide className='flex justify-center w-fit'>

            <ProjectCardComponent name="XeroxExpress" description="Projeto feito com intenção de divulgar a empresa para mais pessoas da cidade. Foi feito para anunciar os serviços, cursos e seu contato." url="https://gabrielj.dev" />
                    
          </SwiperSlide>
          <SwiperSlide className='flex justify-center w-fit'>

            <ProjectCardComponent name="XeroxExpress" description="Projeto feito com intenção de divulgar a empresa para mais pessoas da cidade. Foi feito para anunciar os serviços, cursos e seu contato." url="https://gabrielj.dev" />
                    
          </SwiperSlide>
          <SwiperSlide className='flex justify-center w-fit'>

            <ProjectCardComponent name="XeroxExpress" description="Projeto feito com intenção de divulgar a empresa para mais pessoas da cidade. Foi feito para anunciar os serviços, cursos e seu contato." url="https://gabrielj.dev" />
                    
          </SwiperSlide>
          <SwiperSlide className='flex justify-center w-fit'>

            <ProjectCardComponent name="XeroxExpress" description="Projeto feito com intenção de divulgar a empresa para mais pessoas da cidade. Foi feito para anunciar os serviços, cursos e seu contato." url="https://gabrielj.dev" />
                    
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="ml-6 gap-4 flex">
          <svg className="cursor-pointer" onClick={handlePrev} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5 7L12 18.5M12 18.5L23.5 30M12 18.5L35 18.5" stroke="white" stroke-width="2" />
            <g clip-path="url(#clip0_0_1)">
              <path d="M-8.74228e-07 20C-1.35705e-06 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 -3.91405e-07 20 -8.74228e-07C8.9543 -1.35705e-06 -3.91405e-07 8.9543 -8.74228e-07 20Z" fill="#503D77" />
              <path d="M26.2002 20.2L11.8002 20.2M11.8002 20.2L17.1733 26.2M11.8002 20.2L17.1733 14.2" stroke="white" stroke-width="2" />
            </g>
            <defs>
              <clipPath id="clip0_0_1">
                <rect width="40" height="40" fill="white" transform="translate(40) rotate(90)" />
              </clipPath>
            </defs>
          </svg>

          <svg className="cursor-pointer" onClick={handleNext} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15_23)">
              <path d="M40 20C40 8.95431 31.0457 1.35705e-06 20 8.74228e-07C8.95431 3.91405e-07 1.35705e-06 8.9543 8.74228e-07 20C3.91405e-07 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20Z" fill="#503D77" />
              <path d="M13.7998 19.8L28.1998 19.8M28.1998 19.8L22.8267 13.8M28.1998 19.8L22.8267 25.8" stroke="white" stroke-width="2" />
            </g>
            <defs>
              <clipPath id="clip0_15_23">
                <rect width="40" height="40" fill="white" transform="translate(0 40) rotate(-90)" />
              </clipPath>
            </defs>
          </svg>
        </div>

    </section>
  )
}

export default ProjectsComponent