import Service from "@/components/services/Service"

const Services = () => {
    return (
        <section className="contained w-full flex flex-col items-center gap-3" data-aos="fade">
            <h2>Services</h2>
            <hr className="smaller-divider mx-auto" />
            <section className="flex flex-col sm:flex-row justify-between items-center gap-10 w-full max-w-6xl mx-auto">
                <Service service="Design" filename="service-design.svg" imgOrder={0} />
                <Service service="Development" filename="service-development.svg" imgOrder={1} />
                <Service service="Marketing" filename="service-marketing.svg" imgOrder={0} />
            </section>
        </section>
    )
}

export default Services