import Readmore from "./Readmore";
import Date from "./Date";

export default function ArticleLink({id, title, content, img, date}) {

    const characters = (string) => {
        // prepare string to show
        const new_string = string.replace(/<img[^>]*>/gi,"").replace(/<br>/gi," ");
        if (new_string.length > 250 ){
            return new_string.substring(0, 250) + '...'
        }else {
            return new_string
        }
    }

    return (
        <div className={"md:grid md:grid-cols-9 md:gap-8 hover:bg-white-4 hover:border-b-border mb-16 content-center"}>
            <div className={"md:col-start-1 self-center md:col-span-6 md:ml-8 "}>
                <div className={"mb-8"}>
                    <h1 className={"mb-2 md:text-7xl text-5xl font-normal font-poppins"}>{title}</h1>
                    <Date date={date}/>
                </div>
                <p className={"font-osans mb-2  max-h-full text-lg font-normal intro"}
                    dangerouslySetInnerHTML={{__html: characters(content)}}
                >
                </p>
                <div className={"md:w-1/3 mb-2"}>
                    <Readmore link={'/article/' + id}/>
                </div>
            </div>
            <div className={"col-start-7 col-span-3 p-4 flex justify-center self-center"}>
                <img className={"rounded-2xl"} src={img} alt={"intro"}/>
            </div>
        </div>
    )
}