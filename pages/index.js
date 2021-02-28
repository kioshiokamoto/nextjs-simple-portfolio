import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

import { skills, experiences, projects, posts } from '../profile';

export default function Home() {
	return (
		<>
			<Head>
				<title>My portfolio</title>
			</Head>
			<Layout>
				{/* Header card */}
				<header className="row">
					<div className="col-md-12">
						<div className="card card-body bg-secondary text-light">
							<div className="row">
								<div className="col-md-4">
									<img src="/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
								</div>
								<div className="col-md-8">
									<h1>Rayn Ray</h1>
									<h3>Fullstack developer</h3>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum deserunt
										repudiandae, vitae blanditiis optio eos iusto deleniti culpa ad pariatur dolor,
										eveniet accusantium excepturi.
									</p>
									<Link href="/hireme">
										<a>Hire me</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Second section */}
				<div className="row py-2">
					<div className="col-md-4">
						<div className="card bg-light">
							<div className="card-body">
								<h1>Skills</h1>
								{skills.map((skill, idx) => (
									<div className="py-3" key={idx}>
										<h5>{skill.skill}</h5>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												style={{ width: `${skill.percentage}%` }}
												aria-valuenow="50"
												aria-valuemin="0"
												aria-valuemax="100"
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card bg-light">
							<div className="card-body">
								<h1>Experience</h1>
								<ul>
									{experiences.map(({ title, description, from, to = 'current' }, idx) => (
										<li key={idx}>
											<h3>{title}</h3>
											<h5>
												{from} to {to}
											</h5>
											<p>{description}</p>
										</li>
									))}
								</ul>
								<Link href="/experiences">
									<a className="btn btn-light">Know Here</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Portfolio */}
				<div className="row">
					<div className="col-md-12">
						<div className="card card-body bg-dark">
							<div className="row">
								<div className="col-md-12">
									<h1 className="text-center text-light">Portfolio</h1>
								</div>

								{projects.map(({ name, description, image }, idx) => (
									<div className="col-md-4 p-2" key={idx}>
										<div className="card h-100">
											<div className="overflow">
												<img src={`/${image}`} alt="img" className="card-img-top" />
											</div>
											<div className="card-body">
												<h1>{name}</h1>
												<p>{description}</p>
												<a href="#">Know more</a>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="text-center mt-4">
								<Link href="/portfolio">
									<a className="btn btn-outline-light">More projects</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
