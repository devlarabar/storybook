import Image from 'next/image'
import Hero from '@/components/ui/hero/Hero'
import Services from '@/components/services/Services'
// import SectionWithImage from '@/components/services/SectionWithImage'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between gap-32">
			<Hero />
			<Services />
			{/* <SectionWithImage content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." title="Mobile First" imgPosition={1} filename="mobile-first.jpg" /> */}
		</main>
	)
}
