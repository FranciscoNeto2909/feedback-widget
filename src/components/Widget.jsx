import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"
import WidgetCard from "./WidgetCard"

export default function Widget({text, handleClick}) {
    const [opened, setOpened] = useState(false)
    function handleOpenedWidget() {
        setOpened(!opened)
    }
    return(
        <div className="absolute bottom-4 right-4 items-baseline">
            {opened && 
            <div className="h-52  w-72 bg-[#18181B] rounded-lg p-1">
                <div className="flex justify-around">
                    <h2 className="ml-12 text-[#f4f4f5]">Deixe seu feedback</h2>
                    <button onClick={handleOpenedWidget} className="text-[#a1a1a4] font-semibold hover:text-[#f4f4f5]">x</button>
                </div>
                <div className="flex justify-around mt-7 text-[#f4f4f5]">
                    <WidgetCard text="Problema" imgSrc="https://images.emojiterra.com/twitter/v12/512px/1f41b.png"/>

                    <WidgetCard text="Ideia" imgSrc="https://hotemoji.com/images/dl/r/electric-light-bulb-emoji-by-twitter.png"/>
                    
                    <WidgetCard text="Outro" imgSrc="https://clipartcraft.com/images/thought-bubble-transparent-emoji-2.png"/>
                </div>
                <p className="text-[#a1a1a4] text-sm text-center mt-8">Feito por <span className="underline">Francisco Neto</span></p>
            </div>
            }

       {!opened && <div>
            <button className="bg-violet-900 rounded-full p-3 text-white flex items-center group" onClick={handleOpenedWidget}>
            <ChatTeardropDots size="2.5em"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                Feedback
            </span>
            </button>
        </div>}
        </div>
    )
}