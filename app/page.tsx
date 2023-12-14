import Hero from '@/components/ui/hero/Hero'
import Services from '@/components/services/Services'
import ImagesWithContent from '@/components/services/ImagesWithContent'
import Footer from '@/components/ui/Footer'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-32">
			<Hero />
			<Services />
			<ImagesWithContent />
			<Footer />
		</main>
	)
}
