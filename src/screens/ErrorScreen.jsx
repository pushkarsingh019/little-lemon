import Layout from "../components/Layout";

const ErrorScreen = () => {
  return (
    <Layout>
      <h1 className="text-5xl text-center font-extrabold font-serif">
        Error 404
      </h1>
      <br />
      <h2 className="text-lg text-center">OOPS. Page not found !</h2>
    </Layout>
  );
};

export default ErrorScreen;
