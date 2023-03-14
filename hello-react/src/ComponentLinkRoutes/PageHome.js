import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PageHome() {
  const [postArray, setPostArray] = useState([]);

  async function getPostArray() {
    //Load Data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseJson = await response.json(); //convert Json to array
    setPostArray(responseJson);
  }

  useEffect(() => {
    getPostArray(); //reload Data after Load Data
  }, []);

  //map คือการส่งกลับองค์ประกอบของอาร์เรย์ที่ตรงตามเงื่อนไขที่ระบุในฟังก์ชัน return
  const postElements = postArray.map(post => {
    return (
      <div key={post.id}>
        <h4>
        {post.id}. <Link to={`post/${post.id}`}>{post.title}</Link>
        </h4>
        <p>{post.body}</p>
        <hr/>
      </div>
    );
  });

  return (
    <LayoutPage>
      <h2>Home หน้าแรกของหมู่เฮา</h2>
      {postElements} {/* //นำ postElements ออกไปแสดง UI */}
    </LayoutPage>
  );
}

export default PageHome;