import StarIcon from "@/utils/icons/StarIcon"

export default function MainHotel() {
    return (
    <>
     <div className="mt-6 space-y-1 max-sm:mr-4">
        <span className='flex'>
        <p className="text-gray-700 ml-3 text-nowrap">هتل بین المللی قصر مشهد</p>
        <StarIcon /><StarIcon /><StarIcon />
        </span>
        <p className='text-as opacity-60'>مشهد، خیابان امام رضا(ع)، بین امام رضا 4 و 6</p>
        <p className='text-sm'>32 از 100 <span className='text-xs opacity-80'>معمولی (12 نظر)</span></p>
    </div>
    </>
    ) 
}