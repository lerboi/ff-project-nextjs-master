import Card from "./card";
import SearchPlayer from "./searchplayer";
import Searchplayer_Text from "./searchplayer_text";

export default function Home(){
  return(
    <>
    <div>
    <div id="hero__container" className="grid-cols-2 grid items-center bg-[url('/FF_HeroBG(2).jpg')] bg-center bg-cover h-[60vh] w-full p-10">
      <div className="mb-10p-10 ml-20 flex-none w-[600px]">
        <div className="flex justify-start items-start">
          <Searchplayer_Text/>
        </div>
        <div className="my-6">
          <SearchPlayer/>
        </div>
      </div>
      <div className="flex justify-between items-center gap-14 w-[700px]">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div id="second__section" className="h-[40vh] bg-gradient-to-r from-slate-500 to-orange-300">
      
    </div>
    </div>
    
  </>
  )
}