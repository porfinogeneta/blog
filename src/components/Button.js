import {Link} from "react-router-dom";

export default function Button({text, link=''}) {
    return (
        <button className={"flex w-fit btn-main items-center gap-4 my-4"}>
            {link !== '' ? (
            <Link to={link}>
                <div className={"flex items-center gap-2"}>
                    <p className={"text-xl font-osans tracking-wide font-medium text-white-3"}>{text}</p>
                    <svg className={"mt-2"} width="12" height="18" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.11972 24.15L0 22.0303L9.76056 12.2697L0 2.50918L2.11972 0.389465L14 12.2697L2.11972 24.15Z" fill="#FFEEF4"/>
                    </svg>
                </div>
            </Link>
            ) : (
                <div className={"flex items-center gap-2"}>
                    <p className={"text-xl font-osans tracking-wide font-medium text-white-2"}>{text}</p>
                    <svg className={"mt-1"} width="24" height="24" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.5 33.9531L13.25 20.7031L15.624 18.3292L26.5 29.2604L37.376 18.3844L39.75 20.7583L26.5 33.9531Z" fill="#FFEEF4"/>
                    </svg>
                </div>
            )}
        </button>
    )
}