
export default function RangePrice() {
    return (
        <div className="p-4">
            <p>قیمت کل اقامت (ریال)</p>
            <input type="range" min={0} max={100} className="mt-5 w-full"/>
        </div>
    )
}