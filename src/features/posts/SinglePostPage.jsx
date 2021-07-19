import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'


const SinglePostPage = (props) => {
  const { postId } = props.match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return <h4> Post not found </h4>
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </article>
      <Link to={`/editPost/${post.id}`} className="button">Edit</Link>
      <ReactionButtons post={post} />
    </section>
  )
}

export default SinglePostPage
