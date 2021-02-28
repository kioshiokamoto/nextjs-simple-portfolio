import Link from 'next/link';
import Layout from '../components/Layout';
import { posts } from '../profile';

const PostCard = ({ post }) => (
	<div className="col-md-4">
		<div className="card">
			<div className="overflow">
				<img src={post.imageURL} className="card-img-top" alt="" />
			</div>
			<div className="card-body">
				<h1>{post.title}</h1>
				<p>{post.content}</p>
				<Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}> 
					<button className="btn btn-light">Read</button>
				</Link>
			</div>
		</div>
	</div>
);
const Blog = () => {
	return (
		<>
			<Layout footer={false} dark title="My Blog">
				<div className="row">
					{posts.map((post, idx) => (
						<PostCard post={post} key={idx} />
					))}
				</div>
			</Layout>
		</>
	);
};

export default Blog;
