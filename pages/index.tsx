import Hotel from "@/components/Hotel"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"


export default function Home() {
  return (
    <div dir="rtl" className="bg-silver h-full" id="app">
      <Navbar />
      <div className="flex justify-center">
        <div className="col-span-2">
          <Sidebar />
          </div>
        <div className="col-span-1">
          <Hotel />
        </div>
      </div>
   </div>
  )
}