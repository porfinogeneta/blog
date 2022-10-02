import {useEffect, useState} from "react";
import {request} from "graphql-request";

export const useFetchLastPost = () => {

    const [id, setId] = useState('')

    useEffect(() => {
        const fetchLastId = async () => {
            const { blogPosts } = await request(
                'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
                `
                {
                  blogPosts (last: 1 orderBy:updatedAt_DESC) {
                    id
                }
              }
            `
            )
            setId(blogPosts[0].id)
        }
        fetchLastId()
    }, [])
    return {id}
}