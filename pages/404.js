import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const custom404 = () => {
	return (
		<Layout>
			<div className="text-center">
				<h1>404</h1>
				<p>
					This page does not exist. Please return to
					<Link href="/">
						<a> Home</a>
					</Link>
				</p>
			</div>
		</Layout>
	);
};

export default custom404;
