import SocialIcons from "./SocialIcons";

export default function Footer(){
    return (
        <footer className={"w-full flex-col md:flex-row items-center flex border-t-4 border-border p-4"}>
            <a target="_blank" rel="noopener noreferrer" className={"cursor-pointer mx-16 text-sm font-normal underline decoration-solid decoration-accent self-center"} href={"https://porfinogeneta.github.io/portfolio/"}>
                    Ⓒ Szymon Mazurek 2022
            </a>
            <h4 className={"font-osans footer-logo "}>karol roman</h4>
            <div className={"flex grow gap-4  self-center justify-end items-center md:mr-32"}>
                <SocialIcons/>
            </div>

        </footer>
    )
}