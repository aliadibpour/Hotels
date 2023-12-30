
export default function Navbar() {
    return (
        <>
            <div className="flex justify-center h-20 max-sm:block">
            <div style={{marginLeft:'39rem'}}>
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
            <div className="flex justify-center">
            <div className="bg-blue2 rounded-sm w-48 text-center text-white" style={{marginLeft:'39rem'}}>
                    <p>Map</p>
                </div>

                <select id="small" className="w-72 p-2 rounded-md border-solid border-black border-2 mr-3
                 text-sm borderrounded-lg bg-gray-50 focus:ring-blue focus:border-blue dark:text-white dark:focus:ring-black dark:focus:border-black">
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