const dummy = [
  {
    title: "My new website",
    body: "Hi, my new website here.",
    author: "mario",
    id: 1,
  },
  {
    title: "Welcome party!",
    body: "Welcome to my party.",
    author: "luigi",
    id: 2,
  },
  {
    title: "Web dev top tips",
    body: "Here is some tips for web developing.",
    author: "mario",
    id: 3,
  },
];

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2> {title} </h2>{" "}
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2> {blog.title} </h2> <p> written by {blog.author} </p>
        </div>
      ))}{" "}
    </div>
  );
};

export default BlogList;
