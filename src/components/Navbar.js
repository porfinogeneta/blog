import SocialIcons from "./SocialIcons";
import {Link} from "react-router-dom";
import ChooseMode from "./ChooseMode";
import FontSize from "./FontSize";

export default function Navbar() {
    return (
        <nav className={" border-b-4 border-border"}>
            <ul className={"md:flex md:content-center p-4"}>
                <li className={'md:ml-32 flex justify-center'}>
                    <h2 className={"logo dark:text-white-2"}>karol roman</h2>
                </li>
                <li className={"font-poppins font-normal my-4 md:my-0 gap-8 flex justify-center md:w-1/2 md:items-center md:justify-end"}>
                    <Link to={'/'}><span className={"md:text-2xl text-on-primary-3 dark:text-white-2"}>Blog</span></Link>
                    <Link to={'/about'}><span className={"md:text-2xl text-on-primary-3 dark:text-white-2"}>O mnie</span></Link>
                    <Link to={'/library'}><span className={"md:text-2xl text-on-primary-3 dark:text-white-2"}>Biblioteka</span></Link>
                </li>
                <li className={"flex gap-4 justify-center items-center md:mx-8 my-4"}>
                    <ChooseMode/>
                    <FontSize/>
                </li>
                <li className={"flex gap-4 items-center grow justify-center md:justify-end justify-self-end md:mr-32"}>
                    <SocialIcons/>
                </li>
            </ul>
        </nav>
    )
}