import StarIcon from "@/utils/icons/StarIcon";

export default function Stars() {
    return (
        <div className="flex justify-between p-2">
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon/><p>5</p></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>4</p></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>3</p></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>2</p></div>
            <div className="bg-white flex w-8 p-2 rounded-md text-xs" style={{border:'solid 1px gray'}}><StarIcon /><p>1</p></div>
            <div className="bg-white flex w-20 p-3 rounded-md text-xs" style={{border:'solid 1px gray',textWrap:'nowrap'}}><p>بدون ستاره</p></div>
        </div>
    )
}