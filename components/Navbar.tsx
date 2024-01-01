import ArrowLeft from "@/utils/icons/ArrowLeft";

export default function Navbar() {
    return (
        <>
            <div className="max-md:space-y-32">
            <div className="flex justify-center h-20 max-md:flex-col max-sm:ml-20 ">
            <div>
                <input type="
                text" placeholder="جستوجوی نام هتل یا شهر" className="p-3 rounded-md w-96 mt-5 ml-10
                max-xl:w-80 max-lg:w-80 max-lg:mr-96 max-md:w-11/12 max-md:mt-32 max-md:mr-7 max-sm:mr-10 max-sm:w-full
                " style={{border:'solid 1px gray'}}/>
                    </div>
                    <div className="flex max-sm:mr-32 max-sm:text-nowrap max-md:mr-14">
                        <div className="bg-gray ml-10 text-white text-center text-xs rounded 
                        mt-5 h-12 w-60 max-xl:w-48 max-lg:w-28 max-md:w-full max-sm:w-4/5"><p>تاریخ رفت</p></div>
                        <div className="bg-gray ml-10 text-white text-center text-xs rounded
                        mt-5 h-12 w-60 max-xl:w-48 max-lg:w-28 max-md:w-full max-sm:w-4/5">تاریخ برگشت</div>
                    </div>
            <div>
                <button type="button" className="
                text-white bg-blue p-3 hover:bg-blue2 rounded-md w-48 mt-5  transition-all duration-200
                max-md:w-11/12 max-md:mr-7 max-sm:mr-10 max-sm:w-full  max-lg:ml-96 max-lg:w-24
                ">جستجو</button>
                </div>
            </div>
            <div className="flex justify-center max-lg:flex-col space-y-5 max-md:mt-12 max-lg:p-10">
                    <div className="bg-blue2 rounded-sm w-48 text-center text-white max-md:w-full max-md:h-20 max-xl:w-42 max-xl:mr-8 max-lg:w-full 
                    max-lg:mr-0 max-lg:h-24" style={{ marginLeft: '43rem' }}>
                    <p>Map</p>
                </div>

                <select id="small" className="w-72 p-2 rounded-md max-md:w-full max-md:h-14
                 text-sm borderrounded-lg bg-gray-50 focus:ring-silver focus:border-blue dark:text-white dark:focus:ring-black dark:focus:border-black
                 max-xl:ml-8 max-lg:w-full"
                 style={{border:'solid 1px gray'}} >
                    <option selected>اولویت</option>
                    <option value="US">نام هتل</option>
                    <option value="CA">کمترین قیمت</option>
                    <option value="FR">بالا ترین امتیاز مهمان ها</option>
                    <option value="DE">بیشترین ستاره</option>
                </select>
                </div>
                </div>
        </>
    )
}