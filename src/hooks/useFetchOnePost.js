import {useEffect, useState} from "react";
import {request} from "graphql-request";

export const useFetchOnePost = (id) => {

    const [article, setArticle] = useState()

    useEffect(() => {
        const fetchPost = async () => {
            const { blogPost } = await request(
                'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
                `
                          {
                          blogPost(where:{ id:"${id}"}) {
                            id
                            title
                            content{
                              html
                              text
                            }
                            title
                          }
                        }
                    `
            )
            setArticle(blogPost)
        }
        fetchPost()
    }, [id])
    return { article }
}