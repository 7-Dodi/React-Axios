import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogFetch from "../Axios/Axios";
import './Css/DetailsProject.css';

const EditProject = () => {

  const {id} = useParams();

  const [post, setPost] = useState([]);

  const detailsPost = async ()=>{
    try {
      const response =  await blogFetch.get(`/posts/${id}`);
      
      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    detailsPost();
  }, []);

  return (
    <div className="details">
      <h2><span>Post:</span>{post.id}</h2>
      {post.length === 0 ? ("carregando ...") : (
        <>
          <p><span>Título:</span>{post.title}</p>
          <p><span>Conteúdo:</span>{post.body}</p>
        </>
      )}
      <Link to={`/`} className="btn">Voltar a home</Link>
    </div>
  )
}

export default EditProject