import {useEffect, useState} from "react";
import {request} from "graphql-request";

export const useFetchMultiplePosts = (to_load, skip) => {

    const [posts, setPosts] = useState('')

    const [testRun, setTestRun] = useState(true)

    // const compareArrays = (arr_1, arr_2) => {
    //     console.log(arr_1[0].id, 'array 1')
    //     console.log(arr_2[0].id, 'array 2')
    //     if (arr_1[0]) {
    //         return arr_1[0].id !== arr_2[0].id;
    //     }
    //
    // }

//     const sendQuery = useCallback(async () => {
//         const { blogPosts } = await request(
//             'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
//             `
//             {
//               blogPosts (first: ${to_load} skip: ${skip} orderBy:updatedAt_DESC) {
//                 createdAt
//                 id
//                 publishedAt
//                 title
//                 updatedAt
//                 image {
//                   url
//                 }
//                 content {
//                   html
//                 }
//               }
//           }
//         `
//         )
//         await setPosts(prevState => [...blogPosts, ...prevState])
//     }, [to_load, skip]);
//
//     useEffect(() => {
//         sendQuery();
//     }, [to_load, sendQuery, skip]);
//
//     return { posts };
// }

    useEffect(() => {
        const sendQuery = (async () => {
            const { blogPosts } = await request(
                'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8q1ogzi24px01tcgvzg846i/master',
                `
                {
                  blogPosts (first: ${to_load} skip: ${skip} orderBy:updatedAt_DESC) {
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
            if (!testRun) {
                await setPosts(prevState => [...prevState, ...blogPosts,])
            }

        })
        sendQuery()
        setTestRun(false)
        console.log('running')
    }, [skip, to_load, testRun])

    return {posts}
}