import Image from "next/image"
import Link from "next/link"

const HeroContent = () => {
    return (
        <section className="contained w-full xl:w-[85%] mx-auto px-8 flex flex-col md:flex-row items-center justify-center xl:justify-between gap-10 z-10 relative flex-1">
            <div className="flex flex-col items-start justify-center gap-5">
                <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl leading-snug w-full text-center md:text-left">Elevate your<br />web presence</h1>
                <hr className="small-divider max-md:mx-auto" />
                <p className="text-lg text-center md:text-left lg:text-2xl xl:text-3xl leading-normal">Crafting your digital success: build<br />your brand, ignite your impact!</p>
                <Link href="/" className="btn text-2xl py-2 px-8 max-md:mx-auto">Get Started</Link>
            </div>
            <div className="w-[50%] max-md:hidden">
                <img src="/assets/hero-img.png" alt="" width="100%" />
            </div>
        </section >
    )
}

export default HeroContent