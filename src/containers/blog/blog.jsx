import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog1,blog2,blog3,blog4,blog5} from './imports';

const Blog = () => {
  return (
   <div className="gpt3-blog section-padding">
    <div className="gpt3-blog-heading">
      <h1 className='gradient-text'>A lot is happening, 
We are blogging about it.</h1>
    </div>
    <div className="gpt3-blog-container">
      <div className="gpt3-blog-container-groupA">
        <Article />
      </div>
      <div className="gpt3-blog-container-groupB">
      <Article />
      <Article />
      <Article />
      <Article />
      </div>
    </div>
   </div>
  )
}

export default Blog