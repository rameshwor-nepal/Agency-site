import { CreatePost } from '@/lib/CreatePost'
import React from 'react'

const PostInput = () => {
  return (
    <div>
        <form action = {CreatePost}>
            <input type="text" placeholder='title' name='title'/>
            <input type="text" placeholder='body' name='body'/>
            <input type="text" placeholder='userId' name='userId'/>
            <input type="text" placeholder='slug' name='slug'/>
            <button>Create</button>
        </form>
    </div>
  )
}

export default PostInput