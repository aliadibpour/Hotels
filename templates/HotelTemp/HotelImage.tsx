import Image from "next/image"
import pic from '../../utils/ghasr-international-hotel-mashhad-030.jpg'

export default function HotelImage() {
    return (
        <>
        <div className="">
                    <Image src={pic} alt="Product Image" className="object-cover h-full max-sm:w-full" width={300} />
        </div>
        </>
    )
}