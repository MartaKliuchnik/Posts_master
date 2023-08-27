import React from 'react';
import AddPostForm from '../AddPostForm';
import s from './index.module.css';

export default function NavBar() {
    return (
		<div className={s.navMenu}>
			<AddPostForm />
		</div>
	);
}
