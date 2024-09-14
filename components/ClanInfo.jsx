
export default function ClanInfo( {data} ){
    return(
        <div className="text-slate-100 p-5">
            <h1 className="text-xl font-bold">Clan</h1>
            <p>{JSON.stringify(data.clanBasicInfo.clanName).replace(/^.|.$/g, "")}</p>
            <div className="flex gap-2">
                <label>Level: </label>
                <p>{JSON.stringify(data.clanBasicInfo.clanLevel).replace(/^.|.$/g, "")}</p>
            </div>
            <div className="flex gap-2">
                <label>Capacity: </label>
                <p>{JSON.stringify(data.clanBasicInfo.capacity).replace(/^.|.$/g, "")}</p>
            </div>
        </div>
    )
}