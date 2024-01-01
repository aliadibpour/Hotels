import StarIcon from "@/utils/icons/StarIcon";

export default function Stars() {
    return (
        <div className="flex justify-center p-2">
            <div className="bg-white flex w-fit p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon/><p>5</p></div>
            <div className="bg-white flex w-fit p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>4</p></div>
            <div className="bg-white flex w-fit p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>3</p></div>
            <div className="bg-white flex w-fit p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>2</p></div>
            <div className="bg-white flex w-fit p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>1</p></div>
            <div className="bg-white flex w-fit p-3 rounded-md text-xs" style={{border:'solid 1px gray',textWrap:'nowrap'}}><p>بدون ستاره</p></div>
        </div>
    )
}