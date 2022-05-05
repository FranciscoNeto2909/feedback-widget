export default function Card({text,imgSrc,setFType}) {

    return(
        <button className="group cursor-pointer border-2 border-transparent hover:border-violet-800 rounded-md" onClick={()=>{setFType(text)}}>
            <div className="flex flex-col items-center justify-center bg-[#27272a] h-24 w-20 text-center rounded-md">
            <img src={imgSrc} alt="ilustration" className="h-8 mb-2 mx-auto"/>
            <h3 className="">{text}</h3>
            </div>
        </button>
    )
}