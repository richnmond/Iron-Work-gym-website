import Hero from '@/components/Hero'
import ClassPreview from '@/components/ClassPreview'
import MembershipPlans from '@/components/MembershipPlans'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ClassPreview />
      <MembershipPlans />
      <Testimonials />
      <Gallery />
      <CTA />
    </>
  )
}