import React from "react";
import Post from "../components/Post";

const Blog: React.FC = () => {
  const posts = [
    {
      title: "My Journey with Blockchain",
      content: "Blockchain has opened up a world of possibilities. From building Web3 applications to exploring smart contracts..."
    },
    {
      title: "The Art of Hackathons",
      content: "Hackathons have taught me the importance of teamwork, creativity, and fast problem-solving. Here are my experiences..."
    },
    {
      title: "Exploring AI in Design",
      content: "With projects like Kaleido, I’ve discovered how AI can empower designers to experiment with colors effortlessly..."
    },
    {
      title: "Building a Web3 Club",
      content: "Starting the Wallstreet DAO Club at my university was one of the most fulfilling experiences of my journey."
    },
  ];

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
