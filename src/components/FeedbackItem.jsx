import { Camera } from "phosphor-react"
import BackButton from "./BackButton"
import CloseButton from "./CloseButton"
export default function FeedBackItem({fType, setFType,handleOpenedWidget}) {
    return(
         <div className="flex flex-col">
             <header className="mb-2">
                 <BackButton setFType={setFType}/>
                 <h3 className="text-center">{fType}</h3>
                 <CloseButton handleOpenedWidget={handleOpenedWidget}/>
             </header>
             <textarea cols="20" rows="4" 
                className="p-2 bg-transparent border-2 border-zinc-600 rounded-md outline-none text-sm focus:border-violet-900 resize-none " placeholder="Nos conte o que esta acontecendo..."></textarea>
             <div className="flex justify-between mt-2">
                 <button className="border-[1px] border-transparent hover:border-zinc-100 hover:bg-zinc-700 px-2 rounded-sm bg-zinc-800">
                     <Camera/>
                 </button>
                 <button className="bg-violet-900 hover:bg-violet-800 py-2 w-56 rounded-sm text-sm">Enviar Feedback</button>
             </div>
             <footer>
                    <p className="text-[#a1a1a4] text-sm text-center mt-1">Feito por <span className="underline">Francisco Neto</span></p>
                </footer>
         </div>
    )
}