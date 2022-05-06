import { Camera, CircleNotch,Trash } from "phosphor-react"


export default function ScreenShotButton({takeScreenShot,setImg,handleTakeScreenShot,img}) 
{
    if(img){
        return(
            <button
            className=" flex w-8 justify-end items-end rounded-sm"
                style={{backgroundImage:`url(${img})`}}
                onClick={()=>{setImg("")} }>
                <Trash/>
            </button>
        )
    }
    return(
        <button 
            className="border-[1px] border-transparent hover:border-zinc-100 hover:bg-zinc-700 px-2 rounded-sm bg-zinc-800" 
            onClick={handleTakeScreenShot}>
                     {!takeScreenShot ? <Camera/> : <CircleNotch className="animate-spin"/>}
        </button>
    )
}