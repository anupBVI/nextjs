
function ArticleListByCategory({ articles, category }) {
  return (
    <div>
      <h1>Showing news for category , {category}</h1>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id}. {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params , req , res , query} = context;
  console.log(query)
  console.log(req.headers.cookie)
  res.setHeader('set-cookie',['name = renderer'])
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data =await response.json();
  console.log("Pre rendering news article for category " , {category})

  return { 
    props: {
      articles: data,
      category,
    },
  };
}
