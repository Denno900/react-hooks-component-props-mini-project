import React from "react"
import Articles from "./Articles"
import blogData from "../data/blog.js"


function ArticleList (){
    const articles = blogData.posts.map((posts) => {
        return (
        <Articles
        key={posts.id} 
        date={posts.date}
        preview={posts.preview}
        title={posts.title}
        />
        )
    })

    return <main>{articles}</main>
}

export default ArticleList