import React from 'react';
import s from './index.module.css';
import { CloseOutlined } from '@ant-design/icons';

export default function Comment({comment}) {
    return (
		<div className={s.commentItem}>
			<p>{comment}</p>
		</div>
	);
}
