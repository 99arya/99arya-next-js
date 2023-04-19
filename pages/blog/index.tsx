import Layout from '../../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
        <p className="mt-4">This is the homepage of my website built using Next.js 13 and Tailwind CSS.</p>
      </div>
    </Layout>
  );
}
