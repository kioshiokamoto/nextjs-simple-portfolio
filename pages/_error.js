import Layout from '../components/Layout';

const _erroor = ({statusCode}) => {
	return (
		<Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not load your page: status code {statusCode}</p>
                ) : (
                    <p className="text-center">Could not get this page</p>
                )
            }
		</Layout>
	);
};

export default _erroor;
