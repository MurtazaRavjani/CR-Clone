import React from 'react'
// import useRouter from 'next';
import Image from 'next/image';


interface CardProps{
    key : number;
    imageSrc : string;
    imageAlt : string;
    title: string;
    description:React.ReactNode;
   
}

const Card: React.FC<CardProps> = ({
    imageSrc, 
    imageAlt,
    title,
    description,
  
}) =>  {
    
    const handleClick = () =>{
        // router.push(link)
    } 
     
    return (
      <div 
      className=" rounded-2xl bg-zinc-900 hover:bg-zinc-700" 
      onClick={handleClick}
      >
      <Image className='flex mt-4 ml-4' src={imageSrc} width={40} height={40} alt={imageAlt}>
      </Image>
      <div className=' my-5 mx-4 overflow-hidden'>
        <h2 className='text-xl font-semibold mb-8 ml-1'>{title}</h2>
        <p className=''>{description}</p>
      </div>
      </div>
    
  )
}
export default Card