import { star } from "../assets/icons";
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img
            src={imgURL}
            alt= {name}
            className='w-[280px] h-[280px]'
        />

        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" 
                widht={24} height={24}
            />
            <p className="text-slate-gray leading-normal font-montserrat
            text-xl">(4.3)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin
        ">{name}</h3>
        <p className="font-semibold mt-2 text-coral-red text-2xl leading-normal ">{price}</p>
    </div>
  )
}

export default PopularProductCard;