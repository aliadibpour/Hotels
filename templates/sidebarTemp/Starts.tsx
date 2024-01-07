import StarIcon from "@/utils/icons/StarIcon";

export default function Stars() {
    return (
        <div className="flex justify-between">
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><span>5</span></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><span>4</span></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><span>3</span></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><span>2</span></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><span>1</span></div>
            <div className="bg-white flex w-16 p-3 rounded-md text-xs" style={{border:'solid 1px gray',textWrap:'nowrap'}}><p>بدون ستاره</p></div>
        </div>
    )
}