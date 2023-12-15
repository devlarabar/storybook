type Props = {
    service: String,
    filename: String,
    imgOrder: number
}

const Service = ({ service, filename, imgOrder }: Props) => {
    return (
        <div className="w-full sm:w-1/3 sm:max-w-[200px] flex flex-row sm:flex-col justify-center sm:justify-start items-center gap-6 flex-1">
            <img src={`/assets/${filename}`} className={`service-img w-5/6 max-w-[150px] sm:max-w-[200px] flex-1 max-sm:order-${imgOrder}`} />
            <h3>{service}</h3>
        </div>
    )
}

export default Service