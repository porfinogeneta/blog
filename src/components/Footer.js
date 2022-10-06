import SocialIcons from "./SocialIcons";

export default function Footer(){
    return (
        <div className={" w-full flex-col md:flex-row items-center flex border-t-4 border-border p-4"}>
            <a target="_blank" rel="noopener noreferrer" className={"cursor-pointer mx-16 text-sm font-normal underline decoration-solid decoration-accent self-center"} href={"https://porfinogeneta.github.io/portfolio/"}>
                    <span className={"text-sm dark:text-white-2 text-on-primary-3"}>Ⓒ MazurekDev 2022</span>
            </a>
            <h4 className={"font-osans footer-logo dar dark:text-white-2 text-on-primary-3"}>karol roman</h4>
            <div className={"flex grow gap-4  self-center justify-end items-center md:mr-32"}>
                <SocialIcons/>
            </div>

        </div>
    )
}