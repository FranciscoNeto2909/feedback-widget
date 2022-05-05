import { ChatTeardropDots } from "phosphor-react"
import { useState } from "react"

import Form from "./Form"

export default function Widget({text, handleClick}) {
    const [opened, setOpened] = useState(false)
    function handleOpenedWidget() {
        setOpened(!opened)
    }
    return(
        <div className="absolute bottom-4 right-4 flex flex-col items-end">
            {opened && <Form handleOpenedWidget={handleOpenedWidget}/>}

            <button className="bg-violet-900 rounded-full p-3 flex items-center group" onClick={handleOpenedWidget}>
            <ChatTeardropDots size="2.5em"/>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                Feedback
            </span>
            </button>
        </div>
    )
}