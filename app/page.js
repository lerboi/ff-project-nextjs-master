import Card from "@/components/card";
import SearchPlayer from "../components/searchplayer";

export default function Home(){
  return(
    <>
    <div id="hero__container" className="md:flex grid items-center bg-[url('/FF_HeroBG(2).jpg')] bg-center bg-cover h-[60vh] w-full">
      <div className="md:ml-20">
        <div className="grid grid-rows-2 justify-center">
          <h1 className="font-extrabold text-4xl text-white">FREE FIRE STATS</h1>
          <p className="text-zinc-200 m-1">Check detailed Free Fire Statistics of players and more!</p>
        </div>
        <SearchPlayer/>
      </div>
      <div className="w-full md:justify-center md:items-center flex justify-center gap-5 h-full items-start">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    <div id="second__section" className="h-[40vh] bg-gradient-to-r from-slate-500 to-orange-300">

    </div>
  
  </>
  )
}