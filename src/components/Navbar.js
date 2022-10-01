import SocialIcons from "./SocialIcons";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={"bg-primary border-b-4 border-border"}>
            <ul className={"md:flex md:content-center p-4"}>
                <li className={'md:ml-32 flex justify-center'}>
                    <h2 className={"logo "}>karol roman</h2>
                </li>
                <li className={"font-poppins font-normal my-4 md:my-0 gap-8 flex justify-center md:w-1/2 gap-10 md:items-center md:justify-end"}>
                    <Link to={'/'}><span className={"md:text-3xl  "}>Blog</span></Link>
                    <Link to={'/about'}><span className={"md:text-3xl "}>O mnie</span></Link>
                    <Link to={'/library'}><span className={"md:text-3xl "}>Biblioteka</span></Link>
                </li>
                <li className={"flex gap-4 items-center grow justify-end justify-self-end bg-primary mr-32"}>
                    <SocialIcons/>
                </li>
            </ul>
        </nav>
    )
}