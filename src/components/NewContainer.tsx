import NewArticle from "./NewArticle";

const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] xl:max-h-[580px]">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      <NewArticle />
    </aside>
  );
};

export default NewContainer;
