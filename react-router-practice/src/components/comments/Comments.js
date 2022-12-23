import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from './../../hooks/hooks/use-http';
import { getAllComments } from '../../lib/lib/api';
import { useEffect } from 'react';
import LoadingSpinner from './../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const { quoteId } = params;


  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId, onAddCommentHandler]);

  let comments;
  if (status === 'pending') {
    comments = <div className='centered'><LoadingSpinner></LoadingSpinner></div>;
  }

  if (status === 'completed' && loadedComments) {
    comments = <CommentsList comments={loadedComments}></CommentsList>;
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No commets...</p>;
  }


  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={onAddCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
