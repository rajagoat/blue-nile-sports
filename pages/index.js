import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia optio, nihil laudantium explicabo animi sapiente. Sunt a error voluptates accusantium quis explicabo quod recusandae accusamus. Quisquam vero velit perferendis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo at doloribus dignissimos adipisci est repellat quia et officiis? Repudiandae minima accusantium pariatur commodi quos dolorum veniam aperiam sit ipsa?</p>
      <Footer />
    </div>
  )
}
