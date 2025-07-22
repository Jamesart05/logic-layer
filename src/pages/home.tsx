import BlogList from "../components/blogList";
import info from "../data/info";

const Home = () => {

    return (
        <div className="container">
            <BlogList info={info} />
        </div>
    );
}

export default Home;