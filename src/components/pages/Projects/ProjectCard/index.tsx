import React from 'react';

interface Props {
  name: string,
  description: string,
  url: string
}

const ProjectCardComponent = ({ name, description, url }: Props) => {
  return (
    <div className='max-w-[420px] rounded-md max-h-96 border-solid border-2 border-color-[#D5D5D5] p-8 flex flex-4 flex-col justify-center'>
      <h1 className='text-[24px] mb-2'>{name}</h1>
      <p>{description}</p>

      <a href={url} className='bg-[#503D77] mt-2 p-4 text-[#fff] font-bold rounded flex items-center justify-center'>Acessar</a>
    </div>
  )
}

export default ProjectCardComponent