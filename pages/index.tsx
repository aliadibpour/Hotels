import HotelItem from "@/components/HotelItem"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"


export default function Home() {
  const [filter,setfilter] = useState<boolean>(false)
  return (
    <div className="relative">
    <div dir="rtl" className={`bg-silver h-full `} id="app">
      <Navbar />
      <div className="flex justify-center mt-12">
        <div>
          <Sidebar filter={filter} />
          </div>
        <div>
          <HotelItem />
        </div>
      </div>
      <button onClick={e => setfilter(!filter)} className="hidden max-lg:inline max-lg:bg-blue max-lg:text-white max-lg:p-3
       max-lg:rounded max-lg:opacity-100 max-lg:fixed max-lg:bottom-5 max-lg:right-1/2">فیلتر</button>
      </div>
      <div className={`max-lg:${filter &&'block bg-black h-full absolute top-0 w-full z-10 opacity-50' }`} onClick={e => setfilter(!filter)}></div>
      </div>
  )
}
