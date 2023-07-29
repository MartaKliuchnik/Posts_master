import React, { useContext } from 'react';
import { Context } from '../context';
import Post from '../Post';
import s from './index.module.css';

export default function PostsContainer() {
	const { posts } = useContext(Context);

		return (
			<div className={s.postContainer}>
				{ posts.map((post) => (
					<Post key={post.id} {...post} />))
				}
			</div>
		);
	}
