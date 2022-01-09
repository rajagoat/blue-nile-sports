// import Image from "next/image";
// import Link from "next/link";
// import logo from '../public/icons/logo.svg'
// import downArrowIcon from '../public/icons/down_arrow.svg'
// import instagramIcon from '../public/icons/instagram.svg'
// import twitterIcon from '../public/icons/twitter.svg'

// const Navbar = () => {
//     const logoSize = { height: 50, width: 50 };
//     const downArrowSize = { height: 20, width: 12 };
//     const socialMediaSize = { height: 20, width: 20 };

//     return (
//         <nav>
//             <div className="sitemap">
//                 <div className="logo">
//                     <Link href={'/'} passHref>
//                         <div>
//                             <Image src={logo} alt="Blue Nile Sport Logo" height={logoSize.height} width={logoSize.width} priority />
//                         </div>
//                     </Link>
//                 </div>
//                 <Link href={'/'} passHref>
//                     <div className="down-arrow" style={{color:"white"}} >
//                         <p>Home</p>
//                         {/* <Image src={downArrowIcon} alt="" height={downArrowSize.height} width={downArrowSize.width} /> */}
//                     </div>
//                 </Link>
//                 <Link href={"/articles"} passHref>
//                     <div className="down-arrow" style={{color:"white"}} >
//                         <p>Articles</p>
//                         {/* <Image src={downArrowIcon} alt="" height={downArrowSize.height} width={downArrowSize.width} /> */}
//                     </div>
//                 </Link>
//                 {/* <Link href={"/player-profiles"} passHref>
//                     <div className="down-arrow"  style={{color:"white"}}>
//                         <p>Player Profiles</p>
//                         {/* <Image src={downArrowIcon} height={downArrowSize.height} width={downArrowSize.width} />
//                     </div>
//                 </Link> */}
//                 <Link href={"/schedule"} passHref>
//                     <div className="down-arrow" style={{color:"white"}} >
//                         <p>Schedule</p>
//                         {/* <Image src={downArrowIcon} alt="" height={downArrowSize.height} width={downArrowSize.width} /> */}
//                     </div>
//                 </Link>
//                 <Link href={"/about"} passHref>
//                     <div className="down-arrow" style={{color:"white"}} >
//                         <p>About</p>
//                     </div>
//                 </Link>
//             </div>
//             <div className="social-media">
//                 <a target="_blank" href='https://www.instagram.com/bluenilesports/?hl=en' rel="noopener noreferrer">
//                     <div>
//                         <Image src={instagramIcon} alt="instagram page" height={socialMediaSize.height} width={socialMediaSize.width} />
//                     </div>
//                 </a>
//                 <a target="_blank" href='https://twitter.com/BlueNileSports' rel="noopener noreferrer">
//                     <div>
//                         <Image src={twitterIcon} alt="twitter page" height={socialMediaSize.height} width={socialMediaSize.width} />
//                     </div>
//                 </a>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import Image from "next/image";
import Link from "next/link";
import logo from '../public/icons/logo.png'
// import downArrowIcon from '../public/icons/down_arrow.svg'
// import instagramIcon from '../public/icons/instagram.svg'
// import twitterIcon from '../public/icons/twitter.svg'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    const logoSize = { height: 50, width: 50 };
    const downArrowSize = { height: 20, width: 12 };
    const socialMediaSize = { height: 20, width: 20 };

    return (
        <>
  <Navbar bg="dark" variant="dark" expand="lg" className="navigate">
  <Container>
  <Navbar.Brand href="#home">
      <a href={'/'}>
      <Image src={logo} alt="Blue Nile Sport Logo" height={logoSize.height} width={logoSize.width} />
      </a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="navigate-item" href={'/'}>Home</Nav.Link>
        <Nav.Link className="navigate-item" href={"/articles"}>Articles</Nav.Link>
        <Nav.Link className="navigate-item" href={"/schedule"}>Schedule</Nav.Link>
        <Nav.Link className="navigate-item" href={"/about"}>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default NavigationBar;
