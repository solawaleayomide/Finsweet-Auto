import React, { useEffect } from "react";
import Header from "./sections/Header";
import BlogFourSection from "./sections/BlogFourSection";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <BlogFourSection />
    </div>
  );
}

export default Blog;
