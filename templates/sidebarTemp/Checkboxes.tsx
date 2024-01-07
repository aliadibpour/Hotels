import React from "react"

type user = {
    data : string
}

const h: React.FC<user> = props => {
    const {data} = props;
    return (
        <>
            <div className="p-2">
            <input type="checkbox" className="cursor-pointer size-4" />
                <label className="mr-2  opacity-75">{data}</label>
            </div>
        </>
    )
}
export default h;