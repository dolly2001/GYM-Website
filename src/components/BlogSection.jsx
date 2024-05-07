import React from 'react'

const BlogSection = (props) => {

    const renderBlog =
        props.gymBlogList.map((blog) => {
            return (
                <div className='h-60 w-[40%] flex flex-col justify-center border border-black rounded-xl bg-orange-200 mb-4 p-5'>
                    <h1 className='text-center font-bold text-2xl'>Blog</h1>
                    <div>
                        <h1 className='font-bold text-2xl my-3'>{blog.title}</h1>
                        <h2 className='font-semibold text-xl my-1'>{blog.subject}</h2>
                    </div>
                    <div>
                        <p>{blog.blog}</p>
                    </div>
                </div>
            )
        })

    return (

        <div className='flex flex-col items-center justify-around p-4 mt-[15%]'>
            {renderBlog}
        </div>
    )
}

export default BlogSection;