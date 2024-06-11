import React, { useEffect } from "react";
import Blogs from "../../Components/BlogsComp/BlogsList";
import Chatbot from "../../Components/Open-AI/Chat";

class BlogPost extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {  
    return (
      <>
        <div className="main-blogs-container  bg-black h-[400px]   md:h-screen p-3">
            <Blogs/>
            <Chatbot/>
        </div>
      </>
    );
  }
}
export default BlogPost;