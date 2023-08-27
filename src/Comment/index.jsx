import React, { useContext } from 'react';
import s from './index.module.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Context } from '../context';

export default function Comment({ idPost, id, comment }) {
	const { deleteChosenComment } = useContext(Context);

	return (
		<div className={s.commentItem}>
			<DeleteOutlined 
				className={s.deleteCommentIcon}
				onClick={() => deleteChosenComment(idPost, id)}
			/>
			<p className={s.textComment}>{comment}</p>
		</div>
	);
}
