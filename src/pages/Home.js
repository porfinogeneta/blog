import Readmore from "../components/Readmore";
import ArticleLink from "../components/ArticleLink";
import Button from "../components/Button";
import {useFetchAllPosts} from "../hooks/useFetchAllPosts";
//
// const posts = [
//     {id: 1,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exercitation ullamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id: 2,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris neniam, quis nostrud exerceniam, quis nostrud exerceniam, quis nostrud exercisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id: 3,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco leniam, quis nostrud exerceniam, quis nostrud exercaboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:4,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uleniam, quis nostrud exerclamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:5,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uleniam, quis nostrud exerclamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id:6,title: 'Example Title', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"},
//     {id: 7,title: 'Example Title',content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc nisi ut ali', img: "https://image.lexica.art/md/5a36952d-e6ff-46c6-9ad6-954d2f162bf8"}
// ]

export default function Home(){

    const { posts } = useFetchAllPosts()

    return (
        <div className={"md:mx-32 md:grid md:grid-cols-12"}>
            <div className={"md:col-start-1 md:col-span-8 mx-4"}>
                <h1 className={"md:text-8xl text-7xl md:mx-0 font-normal font-poppins md:mt-20 mt-8 mb-16"}>Ostatnie posty</h1>
                {posts && posts.map((post) => (
                    <ArticleLink key={post.id} id={post.id} title={post.title} content={post.content.markdown} img={post.image.url}/>
                ))}
                <div className={"flex justify-center"}>
                    <Button text={'Więcej? Bibioteka'} link={'/library'}/>
                </div>

            </div>
            <aside className={"flex flex-col my-10 col-start-10 col-span-3 md:border-l-2 md:border-t-0 border-t-2 border-accent"}>
                <h6 className={"mt-20 font-poppins text-2xl font-medium text-left mx-4 md:ml-16"}>O mnie</h6>
                <div className={"mx-auto"}>
                    <img className={"rounded-full w-56"} src={"https://scontent-frt3-1.xx.fbcdn.net/v/t39.30808-1/287570992_1704335043270494_1065019229497455247_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=G34HNH21psgAX__bGl1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-frt3-1.xx&oh=00_AT_JDdCi8Ft9TczEErNpz-HQhPWfQW7SOv-u1DWzTczLpg&oe=633AB1BE"} alt={"my-profile"}/>
                </div>
                <p className={"font-osans text-xl  my-8 mx-4 md:w-3/4 md:mt-4 md:ml-16"}>
                    XYZ Lorem ipsum dolor sit amet, consectetur adipiscing.
                    <Readmore link={'/about'}/>
                </p>
            </aside>
        </div>
    )
}