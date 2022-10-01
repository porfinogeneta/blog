import {useParams} from "react-router-dom";
import {useFetchOnePost} from "../hooks/useFetchOnePost";

export default function Article(){

    const { id } = useParams()

    const { article } = useFetchOnePost(id)

    const scroll = () => {
        const section = document.querySelector( '#article' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const prepareContent = () => {
        console.log(article.content.html.replace(/<br>/g," "))
        return article.content.html.replace(/<br>/g," ");
    }

    return (
        <div>
            {article && (
                <>
                    <div className={"relative w-screen h-screen"}>
                        <div className={"absolute top-0 bg-secondary w-full h-full"}></div>
                        <img className={"opacity-70 object-cover w-full h-full "} src={"https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"} alt={"article"}/>
                        <div className={"absolute top-1/3 w-full text-center"}>
                            <h1 className={"font-poppins md:text-7xl text-5xl text-title-white font-medium"}>{article.title}</h1>
                        </div>

                        <div className={"absolute bottom-1/4 w-full flex justify-center hover:cursor-pointer"} onClick={scroll}>
                            <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58.5 74.9531L29.25 45.7031L34.4906 40.4625L58.5 64.5938L82.5094 40.5844L87.75 45.825L58.5 74.9531Z" fill="#E2E2E2"/>
                            </svg>
                        </div>
                    </div>
                    <article id={"article"} className={"font-osans font-normal text-xl my-20 md:mx-32 mx-4"} dangerouslySetInnerHTML={{__html: prepareContent()}}>
                    </article>
                </>
            )}
        </div>
    )
}