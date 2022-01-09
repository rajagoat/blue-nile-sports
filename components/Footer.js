import instagramIcon from '../public/icons/instagram.svg'
import twitterIcon from '../public/icons/twitter.svg'

import Image from 'next/image'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className={styles.wrapper}>
            <h1>Blue Nile Sport</h1>
            <div>
                <a target="_blank" href='https://www.instagram.com/bluenilesports/?hl=en' rel="noopener noreferrer">
                    <div style={{margin:"16px 0", display:"flex", justifyContent:"space-evenly", width: "100px"}}>
                        <Image src={instagramIcon} alt="instagram page" height={25} width={25} />
                        <Image src={twitterIcon} alt="instagram page" height={25} width={25} />
                    </div>
                </a>
            </div>
            <p>Copyright &copy; {date}</p>
        </footer>
    );
}
 
export default Footer;