import { PlayerCardJsx } from "./Player-Card";
import SearchPlayer from "./SearchPlayer";

export default function Popup({setPopup}){
    return(
        <div className="flex justify-center items-center absolute z-[999] bg-opacity-90 w-full h-full bg-slate-900">
            <div className="flex flex-col gap-6 mb-20 relative h-[50%]">
                <div className="">
                    <h1 className="ml-4 text-5xl font-bold text-white">FIND PLAYERS</h1>
                </div>
                <div>
                    <SearchPlayer/>
                </div>
                {/* <div className="grid grid-cols-3 gap-5 my-8">
                    <Card />
                    <Card />
                    <Card />
                </div> */}
            </div>
        </div>
    )
}