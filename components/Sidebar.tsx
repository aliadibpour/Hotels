import Image from "next/image"
import pic from '../utils/ghasr-international-hotel-mashhad-030.jpg';
import SearchHotelName from "@/templates/sidebarTemp/SearchHotelName";
import Checkboxes from "@/templates/sidebarTemp/Checkboxes";
import { useState } from "react";


    interface user {
        name : string
}
    
const Sidebar: React.FC<null> = () => {
    const [d, setd] = useState<user>({ name: 'فقط هتل های در دسترس ' })
    const [fechers, setfech] = useState<string[]>([
        'اینترنت', 'امکانات تفریحی', 'امکانات اتاق نشیمن', 'خوراکی و نوشیدنی', 'پارکینک', 'سرویس', 'امکانات عمومی', 'زبانهای قابل استفاده', 'منظره', 'امکانات اتاق خواب'
        ,'امکانات ویژه','امکانات اتاق','امکانات معلولین','فضای بیرون','امکانات سمعی و بصری','خدمات فرودگاهی','خدمات حمل و نقل'
    ])
    const [Guestpoints, setGuestpoints] = useState<string[]>(['90+ عالی', '80+ خیلی خوب', '70+ خوب', '50+ معمولی'])
    const [residenceType, setresidenceType] = useState<string[]>(['هتل آپارتمان', 'هتل'])
    return (
        <>
            <div className="h-full w-72 ml-8 mb-5 relative grid grid-cols-1 max-md:translate-x-52" style={{border:'1px silver solid'}}>
                <div className="p-2">
                <SearchHotelName />
                </div><hr/>
                <div>
                    <p className="p-2">فیلتر</p>
                </div><hr/>
                <div className="p-2">
                    <p>هتل های در دسترس</p>
                    <Checkboxes data={d.name} />
                </div><hr />
                <p>امکانات</p>
                <div className="p-2">
                {
                    fechers.map(item => <Checkboxes data={item} />)
                    }
                    </div>
                <hr />
                <div>
                    <p>امتیاز مهمان ها</p>
                    {
                        Guestpoints.map(item => <Checkboxes data={item} />)
                    }
                </div>
                <div>
                    <hr/>
                    <p>نوع اقامتگاه</p>
                    {
                        residenceType.map(item => <Checkboxes data={item} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Sidebar;