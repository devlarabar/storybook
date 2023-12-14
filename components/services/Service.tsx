type Props = {
    service: String,
    filename: String
}

const Service = ({ service, filename }: Props) => {
    return (
        <div className="w-1/3 max-w-[200px] flex flex-col justify-start items-center gap-6">
            <img src={`/assets/${filename}`} className="service-img w-5/6" />
            <h3>{service}</h3>
        </div>
    )
}

export default Service