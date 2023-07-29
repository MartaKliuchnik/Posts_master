import React from 'react';
import s from './index.module.css';

export default function Comment({comment}) {
    return (
		<div className={s.commentItem}>
			<p>{comment}</p>
		</div>
	);
}
