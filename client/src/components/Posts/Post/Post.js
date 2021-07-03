// ? external imports
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';
import moment from 'moment';

// ? internal imports
import useStyles from './PostStyle';

const Post = ({ post }) => {
  const Style = useStyles();
  return (
    <div>
      <Card className={Style.card}>
        {/* //TODO: card header */}
        {/* // * card image */}
        <CardMedia className={Style.media} image={post.selectedFile} title={post.title} />

        {/* // * card creator */}
        <div className={Style.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAl).fromNow()}</Typography>
        </div>

        {/* // * card more button */}
        <div className={Style.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
            <MoreHoriz fontSize="default" />
          </Button>
        </div>

        {/* //TODO: card footer */}
        {/* // * card tag */}
        <div className={Style.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>

        {/* // * card message */}
        <CardContent>
          <Typography variant="body2" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>

        {/* // * card like button */}
        <CardActions className={Style.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAlt fontSize="small" />
            Like
            {post.likeCount}
          </Button>

          {/* // * card delete button */}
          <Button size="small" color="primary" onClick={() => {}}>
            <Delete fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
