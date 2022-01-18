import instagramIcon from '../public/icons/instagram.svg'
import twitterIcon from '../public/icons/twitter.svg'
import facebookIcon from '../public/icons/facebook.svg'

import Image from 'next/image'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className={styles.wrapper}>
            <h1>Blue Nile Sport</h1>
            <div>
                <div style={{ margin: "16px 0", display: "flex", justifyContent: "space-around", width: "100px" }}>
                    <a style={{ marginRight: "3px" }} target="_blank" href='https://www.instagram.com/bluenilesports/?hl=en' rel="noopener noreferrer">
                        <Image src={instagramIcon} alt="instagram page" height={25} width={25} />
                    </a>
                    <a target="_blank" href="https://twitter.com/BlueNileSport" rel="noopener noreferrer">
                        <Image src={twitterIcon} alt="twitter page" height={25} width={25} />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/BlueNileSport" rel="noopener noreferrer">
                        <Image src={facebookIcon} alt="twitter page" height={22} width={22} />
                    </a>
                </div>
            </div>
            <p>Copyright &copy; {date}</p>
        </footer>
    );
}

export default Footer;