import {useEffect, useState} from "react";
import {request} from "graphql-request";

export const useFetchAllPosts = () => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
            const { blogPosts } = await request(
                'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
                `
                {
                  blogPosts {
                    createdAt
                    id
                    publishedAt
                    title
                    updatedAt
                    image {
                      url
                    }
                    content {
                      html
                    }
                  }
              }
            `
            )
            console.log(blogPosts)
            setPosts(blogPosts)
        }
        fetchPosts()

    }, [])
    return {posts}
}