
export default function ClashSquadInfo( {data} ){
    return(
        <>
        <div className="flex flex-col text-slate-100 p-5">
            <h1 className="font-bold text-xl">Clash Squad</h1>
            <div className="flex">
                <label>MAX RANK:</label>
                <p>{JSON.stringify(data.basicInfo.maxRank).replace(/^.|.$/g, "")}</p>
            </div>
            <div className="flex">
                <label>CURRENT RANK:</label>
                <p>{JSON.stringify(data.basicInfo.rank).replace(/^.|.$/g, "")}</p>
            </div>
            <div>
                <label>RANK POINTS:</label>
                <p>{JSON.stringify(data.basicInfo.rank).replace(/^.|.$/g, "")}</p>
            </div>
        </div>
        </>
    )   
}