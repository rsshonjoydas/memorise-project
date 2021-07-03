// ? external imports
import React from 'react';
import { useSelector } from 'react-redux';

// ? internal imports
import Post from './Post/Post';
// import useStyles from './PostsStyles';

const Posts = () => {
  const posts = useSelector((state) => state.postsReducer);
  // const style = useStyles();

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
