import Readmore from "./Readmore";

export default function ArticleLink({id, title, content, img}) {

    const characters = (string) => {
        if (string.length > 250 ){
            return string.substring(0, 250) + '...'
        }else {
            return string
        }
    }

    return (
        <div className={"md:grid md:grid-cols-9 md:gap-8 hover:bg-white-4 hover:border-b-border mb-16 content-center"}>
            <div className={"md:col-start-1 md:col-span-6 md:ml-8 "}>
                <h1 className={"mb-8  md:text-7xl text-5xl font-normal font-poppins"}>{title}</h1>
                <p className={"font-osans mb-8  max-h-full text-lg font-normal intro"}>
                    {characters(content)}
                </p>
                <div className={"md:w-1/3"}>
                    <Readmore link={'/article/' + id}/>
                </div>
            </div>
            <div className={"col-start-7 col-span-3  p-4 "}>
                <img className={"rounded-2xl"} src={img} alt={"intro"}/>
            </div>
        </div>
    )
}