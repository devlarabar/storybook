"use client"

import Hero from '@/components/ui/hero/Hero'
import Services from '@/components/services/Services'
import ImagesWithContent from '@/components/services/ImagesWithContent'
import Footer from '@/components/ui/Footer'
import ContactSection from '@/components/contact/ContactSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
		})
	}, [])
	return (
		<main>
			<div className="flex min-h-screen flex-col items-center justify-between gap-32">
				<Hero />
				<Services />
				<ImagesWithContent />
				<ContactSection />
			</div>
			<Footer />
		</main>
	)
}
