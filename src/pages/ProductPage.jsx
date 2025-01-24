import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);


    const fetchPosts = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div>
            <ul className="list-group">
                {posts.map((post) =>
                    <div>
                        <li className="list-group-item" key={post.id}>{post.title}
                            <button type="button" class="btn btn-info px-3">Info</button>
                        </li>

                    </div>
                )}




            </ul>
        </div>
    )
}

export default ProductPage