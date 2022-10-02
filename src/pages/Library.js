import ArticleLink from "../components/ArticleLink";
import Button from "../components/Button";
import {useFetchMultiplePosts} from "../hooks/useFetchMultiplePosts";
import {useState} from "react";
import {useFetchLastPost} from "../hooks/useFetchLastPost";
import Searchbar from "../components/Searchbar";

// const posts = [
//     {id: 1,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exercitation ullamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id: 2,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris neniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exercisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id: 3,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco leniam, quis nostrud exerceniam, quis nostrud exercaboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:4,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uleniam, quis nostrud exerclamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:5,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uleniam, quis nostrud exerclamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:6,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"}]

export default function Library() {
    // handling pagination
    // const [toLoad, setToLoad] = useState(3)
    const [toSkip, setToSkip] = useState(0)


    // take care of fetching only needed items
    let { posts } = useFetchMultiplePosts(3, toSkip)

    const { id } = useFetchLastPost()


    const handleClick = () => {
        setToSkip(prevState => prevState + 3)
    }

    return (
        <section className={"md:mx-32 my-24"}>
            <Searchbar/>
            {posts && (
                <>
                    <div className={"md:w-2/3 md:mx-auto mx-4"}>
                        {posts.map((post) => (
                            <ArticleLink key={post.id} id={post.id} title={post.title} content={post.content.html} img={post.image.url} date={post.updatedAt}/>
                        ))}
                    </div>
                    <div className={"flex justify-center"}>
                        {posts[posts.length -1].id === id && (<p>Koniec postów :(</p>) }
                        {posts[posts.length -1].id !== id && (<Button text={'Załaduj więcej'} handleClick={handleClick}/>)}
                    </div>
                </>
            )}

        </section>
    )
}