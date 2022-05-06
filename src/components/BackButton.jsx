import { ArrowLeft } from "phosphor-react"
export default function BackButton({setFType}) {
    function handleSetFtype(){
        setFType("")
    }
    return(
        <button 
            className="absolute top-4 left-3 text-[#a1a1a4] hover:text-[#f4f4f5]" 
            onClick={handleSetFtype}>
                <ArrowLeft/>
        </button>
    )
}