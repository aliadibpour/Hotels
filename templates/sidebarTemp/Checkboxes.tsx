import React from "react"

type user = {
    data : string
}

const h: React.FC<user> = props => {
    const {data} = props;
    return (
        <>
            <div>
            <input type="checkbox" />
                <label className="text-xs">{data}</label>
            </div>
        </>
    )
}
export default h;