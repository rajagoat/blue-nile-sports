import Image from "next/image";
import Link from "next/link";
import logo from '../public/icons/logo.svg'
import downArrowIcon from '../public/icons/down_arrow.svg'
import instagramIcon from '../public/icons/instagram.svg'
import twitterIcon from '../public/icons/twitter.svg'

const Navbar = () => {
    const logoSize = { height: 100, width: 100 };
    const downArrowSize = { height: 20, width: 12 };
    const socialMediaSize = { height: 30, width: 30 };

    return (
        <nav>
            <div className="sitemap">
                <div className="logo">
                    <Link href={'/'}>
                        <div>
                            <Image src={logo} height={logoSize.height} width={logoSize.width} priority />
                        </div>
                    </Link>
                </div>
                <Link href={'/'}>
                    <div className="down-arrow" >
                        <a>Home</a>
                        <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
                    </div>
                </Link>
                <Link href={"/articles"}>
                    <div className="down-arrow">
                        <a>Articles</a>
                        <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
                    </div>
                </Link>
                <Link href={"/player-profiles"}>
                    <div className="down-arrow">
                        <a>Player Profiles</a>
                        <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
                    </div>
                </Link>
                <Link href={"/schedule"}>
                    <div className="down-arrow">
                        <a>Schedule</a>
                        <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
                    </div>
                </Link>
                <Link href={"/about"}>
                    <div className="down-arrow">
                        <a>About</a>
                        <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
                    </div>
                </Link>
            </div>
            <div className="social-media">
                <a target="_blank" href='https://www.instagram.com/bluenilesports/?hl=en' rel="noopener noreferrer">
                    <div>
                        <Image src={instagramIcon} height={socialMediaSize.height} width={socialMediaSize.width} />
                    </div>
                </a>
                <a target="_blank" href='https://twitter.com/BlueNileSports' rel="noopener noreferrer">
                    <div>
                        <Image src={twitterIcon} height={socialMediaSize.height} width={socialMediaSize.width} />
                    </div>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;