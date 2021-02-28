import Head from 'next/head';
import React, { useEffect } from 'react';
import {useRouter} from 'next/router'
import Navbar from './Navbar';
import NProgress from 'nprogress';
import ClassNames from 'classnames';


const Layout = ({ children, title, footer= true, dark= false}) => {

	const router = useRouter();

	useEffect(()=>{

		const handleRouteChange = url=>{
			console.log(url)
			NProgress.start();
		}
		router.events.on('routeChangeStart',handleRouteChange);

		router.events.on('routeChangeComplete',()=>NProgress.done());
		return ()=>{
			router.events.off('routeChangeStart',handleRouteChange)
		}
	},[])
	return (
		<div className={ClassNames({'bg-dark':dark})}>
			<Navbar />
			<main className="container py-4">
				{title &&(
					<h1 className={ClassNames('text-center',{'text-light':dark})}>{title}</h1>
				)}	
				{children}
			</main>

			{ footer && <footer className="bg-dark text-light text-center">
				<div className="container p-4">
					<h1>&copy; Ryan Ray Portfolio</h1>
					<p>2000 - {new Date().getFullYear()}</p>
					<p>All rights reserved</p>
				</div>
			</footer>}
		</div>
	);
};

export default Layout;
