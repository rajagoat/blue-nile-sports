const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer>
            <div className="logo">
                <p>Blue Nile Sports | </p>
            </div>
            <p> | Copyright &copy; {date}</p>
        </footer>
    );
}
 
export default Footer;