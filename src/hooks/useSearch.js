import {useEffect, useState} from "react";
import {request} from "graphql-request";

export const useSearch = (query) => {

    const [results, setResults] = useState('')

    useEffect(() => {
        const fetch = async () => {
            const {blogPosts} = await request(
                'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
                `
                {
                  blogPosts (where: { _search: "${query}" } orderBy: createdAt_DESC) {
                    id
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
            setResults(blogPosts)
        }
        fetch()
    }, [query])
    return { results }
}