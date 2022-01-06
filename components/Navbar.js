import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Blue Nile Sports</h1>
            </div>
            <Link href="/"><a>Homepage</a></Link>
            <Link href="/articles"><a>Articles</a></Link>
            <Link href="/player-profiles"><a>Player Profiles</a></Link>
            <Link href="/schedule"><a>Schedule</a></Link>
        </nav>
    );
}
 
export default Navbar;