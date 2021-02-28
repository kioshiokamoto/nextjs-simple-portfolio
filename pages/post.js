import React from 'react'
import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import {posts} from '../profile'
const post = () => {

    const router = useRouter();

    //console.log(router.query)
    const currentPost = posts.filter(post =>post.title===router.query.title)[0];

    return (
        <Layout footer={false} title={currentPost.title}>
            <div className="text-center">
                <img src={currentPost.imageURL} className='img-fluid' alt="" style={{width:'50%'}}/>
                <p>{currentPost.content}</p>

            </div>
        </Layout>
    )
}

export default post
