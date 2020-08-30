import React from 'react';
import styles from './commentsPool.less';

export interface CommentParams {
  user: string;
  comment: string;
}

export const Comment = ({ user, comment }: CommentParams) => {
  const left = Math.random() * 70 + '%';
  const top = Math.random() * 50 + '%';
  return (
    <div className={styles.comment} style={{ top, left }}>
      <span>{user}：</span>{comment}
    </div>
  );
};

export default ({ comments }: { comments: CommentParams[] }) => {
  return (
    <div className={styles.poolContainer}>
      {
        comments && comments.map((item: CommentParams) => {
          return <Comment user={item.user} comment={item.comment} />;
        })
      }
    </div>

  );
};