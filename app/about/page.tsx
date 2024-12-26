import { Metadata } from 'next'
import styles from './page.module.css'
import Image from 'next/image'
import AboutBanner from '@/public/images/AboutBanner.png'
import AboutUs from '@/public/images/AboutUs.png'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'About Us | Software Training Institute',
  description: 'Learn more about our software training institute and our mission',
}

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <section className={styles.banner}>
        <div>
          <p>Make your</p>
          <h1>Dream</h1>
          <h4>comes true</h4>
        </div>
        <Image src={AboutBanner} alt={"About"}></Image>
      </section>

      <section className={styles.summary}>
        <Image src={AboutUs} alt={"About Us"}></Image>
        <div>
          <h2>About Us</h2>
          <p>We Cloudswan Solution established on 2015 in Coimbatore. We are IS 9001:2015 certified training institute. We provide Top-notch Training and placement across different IT sector. Our features include experienced Instructors, corporate style of training, syllabus based on the company requirements. We offer best online and offline training courses on trending technology.</p>
          <Button type={2} text="Contact Us" />
        </div>
      </section>
    </main>
  )
}

