import ContactForm from "@/components/contact/ContactForm"
import ContactText from "@/components/contact/ContactText"

const ContactSection = () => {
    return (
        <section className="bg-[#D3ECFF] w-full" data-aos="fade">
            <div className="contained flex gap-20 py-32 items-center justify-between">
                <ContactForm />
                <ContactText />
            </div>
        </section>
    )
}

export default ContactSection