import { useState } from "react"
import CloseButton from "./CloseButton"
import Card from "./Card"
import FeedBackItem from "./FeedbackItem"

export default function Form({handleOpenedWidget}) {
    const [fType, setFType] = useState("")

    const bugUrl = "https://images.emojiterra.com/twitter/v12/512px/1f41b.png"
    const ideiaUrl = "https://hotemoji.com/images/dl/r/electric-light-bulb-emoji-by-twitter.png"
    const troughUrl = "https://clipartcraft.com/images/thought-bubble-transparent-emoji-2.png"

    return(
        <div className="h-52 mb-3 w-72 bg-[#18181B] rounded-lg p-2 relative shadow-lg">
                {fType ? <FeedBackItem fType={fType} setFType={setFType} handleOpenedWidget={handleOpenedWidget}/>:
                <>
                <header>
                    <h2 className="text-center">Deixe seu feedback</h2>
                    <CloseButton handleOpenedWidget={handleOpenedWidget}/>
                </header>
                <div className="flex justify-around mt-7">
                    <Card text="Problema" imgSrc={bugUrl} setFType={setFType}/>

                    <Card text="Ideia" imgSrc={ideiaUrl} setFType={setFType}/>
                    
                    <Card text="Outro" imgSrc={troughUrl} setFType={setFType}/>
                </div>
                <footer>
                    <p className="text-[#a1a1a4] text-sm text-center mt-6">Feito por <span className="underline">Francisco Neto</span></p>
                </footer>
                </>
                }
        </div>
    )
}