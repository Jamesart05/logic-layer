import type { Info } from "../types/index";

type Props = {
    info: Info[];
};

const BlogList: React.FC<Props> = ({ info }) => {
    return (
        <div className="blog-list">
            <h2>Blogs</h2>
            <div className="contain">
                {info.map((post) => (
                    <div className="gallery"  key={post.id}>
                        <div className="card">
                            <img src={post.image} alt={post.title} />
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <div className="card-footer">
                                <p>{post.date}</p>
                                <a className="links" href="">Read more</a>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;



{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}