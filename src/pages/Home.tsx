import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <p>
        Hi! I’m Gayathri, a passionate software developer exploring the realms of blockchain, AI, and web development. 
      </p>
      <p>
        This is where I share my thoughts, experiences, and ideas about the tech world, hackathons, and exciting projects. 
      </p>
      <button onClick={() => window.location.href = "/blog"}>Explore Posts</button>
    </div>
  );
};

export default Home;
