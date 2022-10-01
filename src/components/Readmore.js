import { Link } from "react-router-dom";

export default function Readmore({link}) {
    return (
        <Link to={link}>
            <span className={"flex items-center text-tertiary gap-1 cursor-pointer"}>
                <span className={"font-osans text-xl font-normal text-tertiary"}>Czytaj dalej</span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="#A10035" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6095 18.6979L13.4897 17.6042L17.8647 13.2292H4.16675V11.6667H17.8647L13.4636 7.26562L14.5834 6.17188L20.8595 12.4479L14.6095 18.6979Z" fill="#A10035"/>
                </svg>
            </span>
        </Link>
    )
}