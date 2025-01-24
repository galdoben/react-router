import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPost from '../components/CardPost';
import { Link } from 'react-router-dom';

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
                    <div key={post.id}>
                        <li className="list-group-item">{post.title}
                            <Link type="link" className="btn btn-info px-3" to={`/card/${post.id}`}>Info</Link>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default ProductPage