import { X } from "phosphor-react"

export default function CloseButton({handleOpenedWidget}) {
    return(
        <button onClick={handleOpenedWidget} className="absolute top-4 right-4 text-[#a1a1a4] font-semibold hover:text-[#f4f4f5]"><X weight="bold"/></button>
    )
}