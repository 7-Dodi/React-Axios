import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogFetch from '../Axios/Axios';

import './Css/NewProject.css';

export const NewProject = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1};
    await blogFetch.post('/posts', {
      body: post
    })

    navigate('/');
  }

  return (
    <div className='new'>
    <h2>Novo Post:</h2>
    <form onSubmit={createPost}>
      <div className='form'>
        <label htmlFor="title">Título:</label>
        <input type="text" 
          name='title' 
          id='title' 
          placeholder='Informe o nome do Post' 
          onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      <div className='form'>
        <label htmlFor="body">Conteúdo:</label>
        <textarea name="body" 
          id="body" 
          placeholder='Informe o conteúdo do Post' 
          onChange={(e)=> setBody(e.target.value)}>
        </textarea>
      </div>
      <button className='btn'>Criar Post</button>
    </form>
  </div>
  )
}
