import Button from "../components/Button";

export default function About() {
    return (
        <div className={"flex md:flex-row flex-col items-center justify-center gap-16 md:mx-32 my-16 md:mt-48 md:mb-40"}>
            <div className={"md:w-1/3 w-3/4 flex justify-end"}>
                <img className={"rounded-full w-96"} src={"https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/287570992_1704335043270494_1065019229497455247_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=G34HNH21psgAX__bGl1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-frt3-1.xx&oh=00_AT_JDdCi8Ft9TczEErNpz-HQhPWfQW7SOv-u1DWzTczLpg&oe=633AB1BE"} alt={"profile"}/>
            </div>
            <section className={"md:w-2/3 mx-4  md:mx-0 flex gap-4 md:gap-16 flex-col"}>
                <h3 className={
                    " font-medium welcome font-poppins"}>
                    Witaj, jestem Karol Roman
                </h3>
                <p className={"font-osans font-normal md:w-4/5"}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor
                </p>
                <Button text={'Więcej'} link={'/'}/>
            </section>
        </div>
    )
}