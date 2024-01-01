import ArrowLeft from '@/utils/icons/ArrowLeft';
import pic from '../utils/ghasr-international-hotel-mashhad-030.jpg';
import Image from 'next/image';

export default function HotelItem() {
    return (
        <div>

            <div className="grid grid-cols-3 h-42 gap-3 w-11/12 mr-7 overflow-hidden rounded-md bg-white max-sm:grid-cols-1 max-sm:ml-6">

<div className="">
    <Image src={pic} alt="Product Image" className="object-cover h-full" width={300} />
</div>

<div className="mt-6 ">
                    <p className="text-gray-700">هتل بین المللی قصر مشهد</p>
                    <p className='text-xs'>مشهد، خیابان امام رضا(ع)، بین امام رضا 4 و 6</p>
</div>

                <div className="text-left max-sm:text-start p-5">
                    <p className='text-xs bg-green inline text-white p-1 rounded-xl'>20% تخفیف</p>
                    <div className='grid grid-cols-2 text-sm mt-1'>
                        <p className='opacity-50 line-through'>3.000.000 ریال</p>
                        <p>23.400.000ریال</p>
                    </div>
                    <p className='text-xs mb-3 opacity-70'>شروع قیمت برای هر یک شب</p>
                    
                    <button type='button' className="flex float-end bg-blue hover:bg-blue2 w-48 text-white p-3 rounded-md mt-10 max-sm:w-full max-sm:mr-0 max-sm:text-center
                     max-sm:mt-6">
                        مشاهده اتاق ها
                    <ArrowLeft />
                    </button>
                    </div>
                </div>
                </div>

    )
}