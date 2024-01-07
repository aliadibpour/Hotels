import SearchHotelName from "@/templates/sidebarTemp/SearchHotelName";
import Checkboxes from "@/templates/sidebarTemp/Checkboxes";
import { useState } from "react";
import Stars from "@/templates/sidebarTemp/Starts";
import RangePrice from "@/templates/sidebarTemp/RangePrice";

interface user {
        name: string
}
type ftype= {
    filter:boolean
}
 
    
const Sidebar: React.FC<ftype> = ({filter}) => {
    const [d, setd] = useState<user>({ name: 'فقط هتل های در دسترس ' })
    const [fechers, setfech] = useState<string[]>([
        'اینترنت', 'امکانات تفریحی', 'امکانات اتاق نشیمن', 'خوراکی و نوشیدنی', 'پارکینک', 'سرویس', 'امکانات عمومی', 'زبانهای قابل استفاده', 'منظره', 'امکانات اتاق خواب'
        ,'امکانات ویژه','امکانات اتاق','امکانات معلولین','فضای بیرون','امکانات سمعی و بصری','خدمات فرودگاهی','خدمات حمل و نقل'
    ])
    const [Guestpoints, setGuestpoints] = useState<string[]>(['90+ عالی', '80+ خیلی خوب', '70+ خوب', '50+ معمولی'])
    const [residenceType, setresidenceType] = useState<string[]>(['هتل آپارتمان', 'هتل'])
    return (
        <>
            <div className={`h-full w-72 mr-14 mb-5 relative grid grid-cols-1 max-lg:bg-white max-lg:fixed max-lg:top-0 max-lg:overflow-y-scroll 
            transition-all duration-400 max-md:w-1/2 max-sm:w-11/12 text-sm 
            max-lg:h-screen ${filter ? 'max-lg:-right-14'  : 'max-lg:-right-144 max-sm:-right-150' }  max-lg:z-20`} style={{ border: '1px #d9d9d9 solid' }}>
                <div className="p-2">
                <SearchHotelName />
                </div>
                <hr className="text-gray mr-3 ml-3" />
                <div>
                    <p className="p-2">فیلتر</p>
                </div>
                <hr className="text-gray"/>
                <div className="p-2">
                    <p>هتل های در دسترس</p>
                    <Checkboxes data={d.name} />
                </div>
                <hr className="text-gray mr-3 ml-3" />
                <div>
                    <RangePrice />
                </div>
                <hr className="text-gray mr-3 ml-3" />
                <div className="p-5">
                    <p className="mb-5">بر اساس ستاره</p>
                    <Stars/>
                </div>
                <hr className="text-gray mr-3 ml-3"/>
                <p className="p-2">امکانات</p>
                <div className="p-2">
                {
                    fechers.map(item => <Checkboxes data={item} />)
                    }
                    </div>
                <hr className="text-gray mr-3 ml-3"/>
                <div>
                    <p className="p-2">امتیاز مهمان ها</p>
                    {
                        Guestpoints.map(item => <Checkboxes data={item} />)
                    }
                </div>
                <div>
                    <hr className="text-gray mr-3 ml-3"/>
                    <p className="p-2">نوع اقامتگاه</p>
                    {
                        residenceType.map(item => <Checkboxes data={item} />)
                    }
                </div>
            </div>
        </>
    )
}
export default Sidebar;