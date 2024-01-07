export default function SelectNav() {
    return (
        <>
        <div className="flex justify-center max-lg:flex-col space-y-5 max-md:mt-12 max-lg:p-10">
                <div className="bg-blue2 ml-150 rounded-sm w-48 text-center text-white max-md:w-full max-md:h-20 max-xl:w-36 max-xl:mr-8 max-lg:w-full 
                    max-lg:mr-0 max-lg:h-24">
                    <p className="text-as">هتل های روی نقشه</p>
                </div>
                <select id="small" className="w-72 p-2 rounded-md max-md:w-full max-md:h-14
                 text-sm borderrounded-lg bg-gray-50 focus:ring-2 focus:outline-none translation-all direction-200 dark:text-white 
                 max-xl:ml-8 max-lg:w-full"
                 style={{border:'solid 1px gray'}} >
                    <option selected>اولویت</option>
                    <option value="US">نام هتل</option>
                    <option value="CA">کمترین قیمت</option>
                    <option value="FR">بالا ترین امتیاز مهمان ها</option>
                    <option value="DE">بیشترین ستاره</option>
                </select>
        </div>
        </>
    )
}