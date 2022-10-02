import ArticleLink from "../components/ArticleLink";
import Searchbar from "../components/Searchbar";
import {useLocation} from "react-router-dom";
import {useSearch} from "../hooks/useSearch";


export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)

    const query = queryParams.get('q')
    console.log(query)
    const {results: posts} = useSearch(query)

    return (
        <section className={"md:mx-32 my-24"}>
            <Searchbar/>

                <div className={"md:w-2/3 md:mx-auto mx-4"}>
                    {posts && posts.map((post) => (
                        <ArticleLink key={post.id} id={post.id} title={post.title} content={post.content.html} img={post.image.url} date={post.updatedAt}/>
                    ))}
                </div>

        </section>
    )
}