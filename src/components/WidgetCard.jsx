export default function WidgetCard({text,img}) {
    return(
        <div className="row align-center">
            <img src={img} alt="" className="h-10 self-center"/>
            <h3>{text}</h3>
        </div>
    )
}