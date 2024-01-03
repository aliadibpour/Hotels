import BtnSearchNav from "@/templates/NavbarTemp/BtnSearchNav"
import CalenderNav from "@/templates/NavbarTemp/CalenderNav"
import SearchNav from "@/templates/NavbarTemp/SearchNav"
import SelectNav from "@/templates/NavbarTemp/SelectNav"


export default function Navbar() {
    return (
        <>
            <div className="max-md:space-y-32">
            <div className="flex justify-center h-20 max-md:flex-col max-sm:ml-20 ">
            <SearchNav />
            <CalenderNav />
            <BtnSearchNav />
            </div>
            <SelectNav />
            </div>
        </>
    )
}