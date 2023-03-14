import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PagePost() {
  const { postId } = useParams(); //postId ที่ต้องการเปิด
  
  const [post, setPost] = useState({});
  async function getPost(fromPostId) { //โหลด /posts/id เช่น /posts/1
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${fromPostId}`); 
    const responseJson = await response.json();
    setPost(responseJson);
  }

  const [commentArray, setCommentArray] = useState([]);
  async function getCommentArray(fromPostId) { //โหลด Comment
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${fromPostId}/comments`); 
    const responseJson = await response.json();
    setCommentArray(responseJson);
  }
  useEffect(() => {
    getPost(postId);
    getCommentArray(postId);
  }, [postId]);

  //แสดง Comment UI
  const commentElements = commentArray.map(comment => {
    return (
      <div key={comment.id}>
        <p>{comment.body}</p>
        <p>{comment.email}</p>
        <b><p>{comment.name}</p></b>
        <hr />
      </div>
    );
  });

  return (
    <LayoutPage>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr/>
      <h4>{commentArray.length} Comments</h4>
      {commentElements}
    </LayoutPage>
  );
}

export default PagePost;