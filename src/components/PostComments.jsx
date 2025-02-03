import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostComments() {
  const { id } = useParams();
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return (
    <div>
      <h1>Post Comments</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h3>Comments</h3>
      {comments && comments.map((comment) => (
        <div key={comment.id}>
          <p><strong>{comment.name}</strong> ({comment.email})</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostComments;