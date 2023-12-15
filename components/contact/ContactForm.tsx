import React from 'react'

const ContactForm = () => {
    return (
        <form data-netlify="true" className="contact-form flex flex-col gap-3 flex-1">
            <label><span>Name</span>
                <input type="text" name="name" />
            </label>
            <label><span>E-Mail</span>
                <input type="text" name="name" />
            </label>
            <label><span>Message</span>
                <textarea name="message" rows={5} />
            </label>
            <input type="submit" name="submit" value="Submit" className="btn btn-accent1" />
        </form>
    )
}

export default ContactForm