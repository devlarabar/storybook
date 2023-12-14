type Props = {
    title: String,
    content: String,
    filename: String,
    imgPosition: number
}

const SectionWithImage = ({ title, content, filename, imgPosition }: Props) => {
    // const imgOrder = imgPosition > 0 ? "order-1" : ""
    // const imgClass = `${imgOrder} bg-[url('/assets/${filename}')] bg-center bg-cover aspect-[5/3] flex-1 rounded-3xl`
    return (
        null
        // <section className="grid grid-cols-2 gap-20 justify-between items-center contained">
        //     <div className={`${imgClass} bg-[url('/assets/mobile-first.jpg']`}>
        //     </div>
        //     <div className="flex-1">
        //         <h2 className="text-left">{title}</h2>
        //         <hr className="smaller-divider mx-0" />
        //         {content}
        //     </div>
        // </section>
    )
}

export default SectionWithImage