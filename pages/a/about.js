import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta property="og:title" content="About" />
        <meta property="og:description" content="about 실습 중 입니다." />
      </Head>
      <h1>This is about page.</h1>
    </div>
  );
};

export default AboutPage;
