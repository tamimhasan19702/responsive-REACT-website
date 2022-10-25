import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './import.js';

const Blog = () => {
  return (
   <div className="gpt3-blog section-padding">
    <div className="gpt3-blog-heading">
      <h1 className='gradient-text'>A lot is happening, 
We are blogging about it.</h1>
    </div>
    <div className="gpt3-blog-container">
      <div className="gpt3-blog-container-groupA">
        <Article imgUrl={blog01} date="oct 25,2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
      </div>
      <div className="gpt3-blog-container-groupB">
      <Article imgUrl={blog02} date="oct 25,2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
      <Article imgUrl={blog03} date="oct 25,2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
      <Article imgUrl={blog04} date="oct 25,2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
      <Article imgUrl={blog05} date="oct 25,2022" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
      </div>
    </div>
   </div>
  )
}

export default Blog