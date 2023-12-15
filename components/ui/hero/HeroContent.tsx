import Image from "next/image"
import Link from "next/link"

const HeroContent = () => {
    return (
        <section className="contained w-[85%] mx-auto px-8 flex items-center justify-between gap-10 z-10 relative">
            <div className="flex flex-col items-start justify-center gap-5">
                <h1 className="font-bold text-6xl leading-snug">Elevate your<br />web presence</h1>
                <hr className="small-divider" />
                <p className="text-3xl leading-normal">Crafting your digital success: build<br />your brand, ignite your impact!</p>
                <Link href="/" className="btn text-2xl py-2 px-8">Get Started</Link>
            </div>
            <div className="w-[50%]">
                <img src="/assets/hero-img.png" alt="" width="100%" />
            </div>
        </section >
    )
}

export default HeroContent