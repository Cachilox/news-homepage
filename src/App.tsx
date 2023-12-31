import "./App.css";
import ArticleContainer from "./components/ArticleContainer";
import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewContainer from "./components/NewContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
      <Footer />
    </main>
  );
}

export default App;
