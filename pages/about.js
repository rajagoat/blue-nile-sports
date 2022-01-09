import styles from '../styles/About.module.css'
import Head from "next/head"
import Button from "react-bootstrap/Button"
import { attributes, react as AboutContent } from '../public/data/about.md';

function About() {

    let { title } = attributes;

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
                <meta name="theme-color" content="#000" />

                <meta name="description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news, commentary, analysis and updates with a heightened focus on football."></meta>
                <meta property="og:title" content={title} />
                <meta property="og:description" content="Blue Nile Sport is a newly launched platform for Ethiopian sporting news."></meta>
                <meta property="og:image" content="/android-chrome-96x96.png"></meta>
            </Head>

            <div className={styles.aboutText}>
                <h1>{title}</h1>
                <AboutContent/>
            </div>

            <form className={styles.contactWrapper} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action={'/thanks'}>
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field"/>
                  </label>
                </div>
                <h1>Contact Us</h1>
                <div className={styles.field}>
                    <label className={styles.contactLabel}><b>Name:</b></label>
                    <input type="text" name="name" required/>
                </div>
                <div className={styles.field}>
                    <label className={styles.contactLabel}><b>Email:</b></label>
                    <input type="email" name="email" required/>
                </div>
                <div className={styles.field}>
                    <label className={styles.contactLabel}><b>Message:</b></label>
                    <textarea name="message" required/>
                </div>
                <div style={{margin:"0 16px 32px 16px"}}>
                    <Button type="submit" variant="primary">Send</Button>
                </div>
                <p>
                </p>
            </form>
        </>
    );
}
 
export default About;