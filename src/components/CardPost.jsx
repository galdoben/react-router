import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const CardPost = () => {

    const { id } = useParams()
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const fetchPost = () => {
        axios.get(`${baseApiUrl}/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((error) => {
                console.error("Errore nel caricamneto del post");
            });
    }
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post?.title}</h5>
                    <p className="card-text">{post?.content}</p>
                    <a href="#" className="btn btn-primary">Elimina</a>
                </div>
            </div>
        </div>
    )
}

export default CardPost