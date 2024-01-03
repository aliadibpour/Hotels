export default function SearchNav() {
    return (
        <div className="max-md:mt-32 bg-white h-12 ml-2 mt-5 w-100 rounded-md max-xl:w-95
            focus:ring max-lg:mr-96 max-md:w-11/12 max-md:mr-7 max-sm:mr-10 max-sm:w-full">
                <p className="text-as opacity-70 mr-3">جستوجوی  هتل / مقصد</p>
                <input type="
                text" placeholder="جستوجوی نام هتل یا شهر" className="p-3 w-full ml-10 h-5 max-lg:w-95 focus:outline-none  max-sm:w-fit focus:border-blue"/>
        </div>
    )
}