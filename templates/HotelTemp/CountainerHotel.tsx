import ArrowLeft from "@/utils/icons/ArrowLeft"

export default function CountainerHotel() {
    return (
        <>
            <div className="text-left max-sm:text-start p-5">
                    <p className='text-as bg-green inline text-white p-1 rounded-xl'>20% تخفیف</p>
                    <div className='grid grid-cols-2 text-sm mt-1 max-xl:text-as'>
                        <p className='opacity-50 line-through text-nowrap'>3.000.000 ریال</p>
                        <p className='text-nowrap'>23.400.000ریال</p>
                    </div>
                    <p className='text-as mb-3 opacity-70'>شروع قیمت برای هر یک شب</p>
                    
                    <button type='button' className="flex float-end justify-center bg-blue2 text-sm  tarnslation-all duration-200 hover:bg-blue
                     w-48 text-white p-3 rounded-md mt-5 max-sm:w-full max-sm:mr-0 max-sm:mt-6">
                        مشاهده اتاق ها
                    <ArrowLeft />
                    </button>
            </div>
        </>
    )
}