import Service from "@/components/services/Service"

const Services = () => {
    return (
        <section className="contained w-full flex flex-col items-center gap-3">
            <h2>Services</h2>
            <hr className="smaller-divider mx-auto" />
            <section className="flex justify-between items-center gap-10 w-full max-w-6xl mx-auto">
                <Service service="Design" filename="service-design.svg" />
                <Service service="Development" filename="service-development.svg" />
                <Service service="Marketing" filename="service-marketing.svg" />
            </section>
        </section>
    )
}

export default Services