import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../context';

export default function Post({ id, title, text, like }) {
    const { changeLike } = useContext(Context);
    
    const likeElem = like ? 'Liked' : 'Like?';
    const likeStyle = [s.likeBtn, like ? s.likeBtnActive : ''].join(' ');

    return (
			<div className={s.postItem}>
				<p>{title}</p>
				<p>{text}</p>
				<p onClick={() => changeLike(id)} className={likeStyle}>
					{likeElem}
				</p>
			</div>
		);
}
