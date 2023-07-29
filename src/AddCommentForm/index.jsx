import React, { useContext } from 'react';
import { Context } from '../context';
import s from './index.module.css';

export default function AddCommentForm({ idPost }) {
    const { addNewComment } = useContext(Context);

	const submit = (e) => {
		e.preventDefault();
		const { comment } = e.target;
        addNewComment({ 
            idPost,
            comment:comment.value
        });
		comment.value = '';
	};
	
	return (
		<form onSubmit={submit} className={s.addCommentForm}>
			<input type='text' name='comment' placeholder='Type your comment' />
			<button>Add comment</button>
		</form>
	);
}
