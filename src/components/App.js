import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import ArticleList from "./ArticleList.js";
import About from "./About.js";

// console.log(blogData)'


function App() {
  return (
    <>
      <Header title={blogData.name}/>
      <About src={blogData.image} about={blogData.about}/>
      <ArticleList/>
    </>
  );
}

export default App;
