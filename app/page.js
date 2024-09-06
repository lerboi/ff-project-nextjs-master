import SearchPlayer from "./searchplayer";

export default function Home(){
  return(
    <>
    <div id="hero__container" className="flex flex-col justify-center items-center bg-[url('/FF_HeroBG(2).jpg')] bg-center bg-cover h-[60vh] w-full">
      <div className="mb-10">
        <SearchPlayer/>
      </div>
      <div>
        
      </div>
    </div>
    <div id="second__section" className="h-[40vh] bg-gradient-to-r from-slate-500 to-orange-300">
      
    </div>
  </>
  )
}