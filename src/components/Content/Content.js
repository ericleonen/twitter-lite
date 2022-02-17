import './Content.css';
import { Post } from './Post/Post';

import { useSelector } from 'react-redux';
import { selectPosts, selectIsLoading } from '../../features/posts/postsSlice';

import { Loader } from './Loader/Loader';

export const Content = () => {
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);

    return (
        <div className="Content">
            { isLoading ? <Loader /> : posts.map(post => <Post data={post} key={post.id}/>) }
        </div>
    );
}