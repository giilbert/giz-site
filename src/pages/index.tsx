import React from "react";
import Layout from "../components/Layout";

const IndexPage: React.FC = () => {
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }

  return (
    <Layout>
      <h1>giz</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis
        nisl quam, vitae malesuada lectus commodo sit amet. Pellentesque risus
        ante, laoreet in congue vitae, porttitor nec mauris. In elementum mauris
        pharetra dui pulvinar tempus. Nam aliquam elit non suscipit sagittis.
        Praesent quis suscipit odio. Duis vitae fermentum arcu. Aenean vehicula
      </p>
    </Layout>
  );
};

export default IndexPage;
