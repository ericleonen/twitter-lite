import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRepeat, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { removePost } from '../../../features/posts/postsSlice';
import { useDispatch } from 'react-redux';

export const Post = (props) => {

    const dispatch = useDispatch();

    const trimName = name => {
        const limit = 21;

        if (name.length < limit) {
            return name;
        }
        else {
            return name.substring(0, limit) + '...';
        }
    }

    return (
        <div className="Post">
            <img className="profile-pic" src={props.data.profile_image.replace('_normal', '_bigger')}/>
            <div className="post-main">
                <div className="post-header">
                    <div className="user-container">
                        <span className="user-name">{trimName(props.data.name)}</span>
                        <span className="user-handle">@{props.data.username}</span>
                    </div>
                </div>
                <div className="post-body">
                    <p className="tweet">{props.data.text}</p>
                </div>
                <div className="post-footer">
                        <button classame="comments-btn">
                            <FontAwesomeIcon icon={faComment} />
                            <span>{props.data.reply_count}</span>
                        </button>
                        <button className="reposts-btn">
                            <FontAwesomeIcon icon={faRepeat} />
                            <span>{props.data.retweet_count}</span>
                        </button>
                        <button className="likes-btn">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{props.data.like_count}</span>
                        </button>
                        <button className="remove-btn" onClick={() => dispatch(removePost(props.data.id))}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                </div>
            </div>
        </div>
    );
}