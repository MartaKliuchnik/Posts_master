import React, { useContext } from 'react';
import s from './index.module.css';
import { ClearOutlined } from '@ant-design/icons';
import { Context } from '../context';

export default function Comment({ idPost, id, comment }) {
	const { deleteChosenComment } = useContext(Context);

	return (
		<div className={s.commentItem}>
			<ClearOutlined
				className={s.deleteCommentIcon}
				onClick={() => deleteChosenComment(idPost, id)}
			/>
			<p>{comment}</p>
		</div>
	);
}
