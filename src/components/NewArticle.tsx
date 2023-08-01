import { newArticles } from "../helpers/strings";

const NewArticle = () => {
  return (
    <article>
      {newArticles.map((article) => (
        <div key={article.id} className="border-b-2 border-GrayishBlue h-[140px] py-7 last:border-none">
          <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] lg:text-[18px] xl:text-[22px] mb-3 font-bold">
            {article.title}
          </h2>
          <p className="text-[15px] text-GrayishBlue">{article.text}</p>
        </div>
      ))}
    </article>
  );
};

export default NewArticle;
