import Image from "next/image"
import pic from '../utils/ghasr-international-hotel-mashhad-030.jpg';
import SearchHotelName from "@/templates/sidebarTemp/SearchHotelName";
import Checkboxes from "@/templates/sidebarTemp/Checkboxes";
import { useState } from "react";


//export default function Sidebar() {
const Sidebar: React.FC<null> = () => {
    interface user {
        name : string
    }
    const [d, setd] = useState<user>({ name: 'فقط هتل های در دسترس ' })
    const [fechers, setfech] = useState<string[]>([
        'اینترنت', 'امکانات تفریحی', 'امکانات اتاق نشیمن', 'خوراکی و نوشیدنی', 'پارکینک', 'سرویس', 'امکانات عمومی', 'زبانهای قابل استفاده', 'منظره', 'امکانات اتاق خواب'
        ,'امکانات ویژه','امکانات اتاق','امکانات معلولین','فضای بیرون','امکانات سمعی و بصری','خدمات فرودگاهی','خدمات حمل و نقل'
    ])
    return (
        <>
            <div className="h-full w-72 ml-8 relative grid grid-cols-1 max-md:translate-x-52" style={{border:'1px silver solid'}}>
                <div>
                <SearchHotelName />
                </div><hr/>
                <div>
                    <p>فیلتر</p>
                </div><hr/>
                <div>
                    <p>هتل های در دسترس</p>
                    <Checkboxes data={d.name} />
                </div><hr />
                <p>امکانات</p>
                {
                    fechers.map(item => <Checkboxes data={item} />)
                }
                <hr />
            </div>
        </>
    )
}
export default Sidebar;