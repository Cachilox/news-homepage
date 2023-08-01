import { articles } from "../helpers/strings";

const Article = () => {
  return (
    <article className="mt-[3.5rem] lg:flex">
      {articles.map((article) => (
        <div key={article.id} className="flex mb-9">
          <div className="w-[100px] flex-none">
            <img width={100} src={article.image} alt={article.title} />
          </div>
          <div className="pl-6">
            <span className="text-GrayishBlue text-3xl font-bold">{article.number}</span>
            <h2 className="font-bold text-[1.1rem] mt-[8px] mb-[8px] hover:text-SoftOrange cursor-pointer transition-all">{article.title}</h2>
            <p className="text-gray-500 text-[15px]">{article.text}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Article;
