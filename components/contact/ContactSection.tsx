import ContactForm from "@/components/contact/ContactForm"
import ContactText from "@/components/contact/ContactText"

const ContactSection = () => {
    return (
        <section className="bg-[#D3ECFF] w-full" data-aos="fade">
            <div className="contained flex flex-col sm:flex-row gap-10 md:gap-20 py-32 items-center justify-between">
                <div className="max-sm:order-1 max-sm:w-full">
                    <ContactForm />
                </div>
                <ContactText />
            </div>
        </section>
    )
}

export default ContactSection