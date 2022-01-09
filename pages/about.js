import styles from '../styles/About.module.css'
import Head from "next/head"
import Button from "react-bootstrap/Button"
import { attributes, react as AboutContent } from '../public/data/about.md';

function About() {

    let { title } = attributes;

    return (
        <>
            {/* <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head> */}
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