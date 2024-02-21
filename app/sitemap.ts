import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  // let blogs = getBlogPosts().map((post) => ({
  //   url: `https://leerob.io/blog/${post.slug}`,
  //   lastModified: post.metadata.publishedAt,
  // }));

  let routes = [''].map((route) => ({
    url: `https://abdullahtahir.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [... routes]
  // return [...routes, ...blogs];
}
