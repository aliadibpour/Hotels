import { Search } from "@/utils/icons/Search";

export default function SearchHotelName() {
    return (
        <>
            <div className="mt-5 relative right-1">
                <h3 className="mb-5">نام هتل</h3>
                <input type="text" placeholder="جستوجوی هتل یا نام هتل" className="mt-3 w-96 w-full  p-5 rounded-md focus:outline-none"  />
                <button className="rounded bg-blue2 p-3 ml-5 text-white absolute top-16 -left-1 max-md:left-20 max-sm:left-3" >
                    <Search/>
                </button>
            </div>
        </>
    )
}