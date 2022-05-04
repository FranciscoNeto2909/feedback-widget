export default function WidgetCard({text,imgSrc}) {
    return(
        <div className="flex flex-col items-center justify-center bg-[#27272a] h-24 w-20 text-center rounded-md">
            <button></button>
            <img src={imgSrc} alt="" className="h-8 mb-2 mx-auto"/>
            <h3 className="">{text}</h3>
        </div>
    )
}