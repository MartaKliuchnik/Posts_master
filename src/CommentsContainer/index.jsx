import React from 'react';
import Comment from '../Comment';
import AddCommentForm from '../AddCommentForm';
import s from './index.module.css';

export default function CommentsContainer({ comments, idPost }) {
	return (
		<div>
			{comments.length !== 0 ? (
				comments.map((comment) => <Comment key={comment.id} {...comment} />)
			) : (
				<p className={s.intoText}>Add first comment</p>
			)}
			<div className={s.commentsFormContainer}>
				<AddCommentForm idPost={idPost} />
			</div>
		</div>
	);
}
