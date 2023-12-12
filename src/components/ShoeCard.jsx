import React from 'react'

const ShoeCard = ({imgURL, changeShoeImg, bigShoeImg}) => {
  const handleClick = () =>{
    if(bigShoeImg !== imgURL.bigShoe){
        changeShoeImg(imgURL.bigShoe)
    }
  }
  return (
    <div className={`rounded-xl border-2 
        ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} 
        cursor-pointer max-sm:flex-1 `}
        onClick={handleClick}>
        
        <div className='flex justify-center items-center bg-card 
        bg-center bg-cover sm:h-40 sm:w-40 rounded-xl
        max-sm:p-4'>
            <img 
                src={imgURL.thumbnail}
                alt = 'collection'
                width={126}
                height={103}
                className='object-contain'
            />
        </div>

    </div>
  )
}

export default ShoeCard;