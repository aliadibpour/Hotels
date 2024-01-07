import HotelImage from '@/templates/HotelTemp/HotelImage';
import CountainerHotel from '@/templates/HotelTemp/CountainerHotel';
import MainHotel from '@/templates/HotelTemp/MainHotel';

export default function HotelItem() {
    return (
        <div className='max-lg:p-6 max-sm:p-1 '>

            <div className="grid grid-cols-3 h-38 gap-3 w-11/12 mr-7 overflow-hidden rounded-md bg-white max-lg:w-full
            max-lg:mr-1 max-sm:h-full max-sm:grid-cols-1 max-sm:ml-10
            max-sm:relative max-sm:left-1 max-sm:rounded-xl">

            <HotelImage />
            <MainHotel />
            <CountainerHotel />
            </div>
        </div>

    )
}