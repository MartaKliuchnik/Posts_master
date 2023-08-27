import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../context';
import CommentsContainer from '../CommentsContainer';
import { CloseOutlined } from '@ant-design/icons';

export default function Post({ id, title, text, like, photo, comments }) {
	const { changeLike, deleteChosenPost } = useContext(Context);

	const likeElem = like ? 'Liked' : 'Like?';
	const likeStyle = [s.likeBtn, like ? s.likeBtnActive : ''].join(' ');

	return (
		<div className={s.postItem}>
			<div className={s.majorVisionPartOfCard}>
				<p className={s.titleCard}>{title}</p>
				<div className={s.imgContainer}>
					<img src={photo} alt='img' />
				</div>
				<div className={s.postInfo}>
					<p>{text}</p>
				</div>
				<div onClick={() => changeLike(id)} className={likeStyle}>
					{likeElem}
				</div>
			</div>
			<div className={s.hiddenPartOfCard}>
				<CommentsContainer comments={comments} idPost={id} />
			</div>
			<CloseOutlined
				className={s.closeIcon}
				onClick={() => deleteChosenPost(id)}
			/>
		</div>
	);
}
