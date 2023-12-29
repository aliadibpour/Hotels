import ArrowLeft from '@/templates/icons/ArrowLeft';
import pic from '../utils/ghasr-international-hotel-mashhad-030.jpg';
import Image from 'next/image';

export default function Hotel() {
    return (
        <div>

            <div className="grid grid-cols-3 h-48 gap-3 w-full rounded-md bg-white max-md:grid-cols-1 max-md:h-full max-md:w-96" style={{ width: '50rem' }}>

<div className="">
    <Image src={pic} alt="Product Image" className="overflow-hidden h-48 rounded" width={300}/>
</div>

<div className="mt-5">
                    <p className="text-gray-700">هتل بین المللی قصر مشهد</p>
                    <p className='text-xs'>مشهد، خیابان امام رضا(ع)، بین امام رضا 4 و 6</p>
</div>

<div className="text-left">
                    <p className="text-base font-semibold mt-4 ml-20">23.400.000ریال</p>
                    <p className='text-xs mb-3 ml-12'>شروع قیمت برای هر یک شب</p>
                    <button className="flex bg-blue hover:bg-blue2 w-40 text-white p-3 rounded-md relative top-16 right-16">
                        مشاهده اتاق ها
                        <div className='w-2 relative top-2 right-8'><ArrowLeft /></div>
                        </button>
                    </div>
            </div>

</div>
    )
}