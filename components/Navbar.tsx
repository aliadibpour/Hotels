
export default function Navbar() {
    return (
        <>
        <div className="flex h-40 justify-around">
            <div>
                <input type="
                text" placeholder="جستوجوی نام هتل یا شهر" className="p-3 rounded-md w-80 mt-5
                max-sm:w-50 mr-0
                " />
            </div>
            <div>
                <button className="
                text-white bg-blue p-3 hover:bg-blue2 rounded-md w-44 mt-5
                max-sm:w-15
                ">جستجو</button>
            </div>
            </div>
        </>
    )
}