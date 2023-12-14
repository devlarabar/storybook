import Header from '@/components/ui/hero/Header'
import HeroStripe from '@/components/ui/hero/HeroStripe'
import HeroContent from '@/components/ui/hero/HeroContent'

const Hero = () => {
    return (
        <section className="hero">
            <HeroStripe />
            <Header />
            <HeroContent />
        </section>
    )
}

export default Hero