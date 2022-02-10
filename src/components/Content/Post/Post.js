import './Post.css';

export const Post = () => {
    return (
        <div className="Post">
            <div className="post-header">
                <img className="profile-pic"/>
                <span className="user-name">ericleonen</span>
                <span className="user-handle">@ericleonen</span>
            </div>
            <div className="post-body">
                <p className="tweet">Wow this is a dummy post</p>
            </div>
            <div className="post-footer">
                <div>
                    <button classame="comments-btn">
                        <i class="fa-solid fa-comment"></i>
                    </button>
                </div>
                <div>
                    <button className="reposts-btn">
                        <i class="fa-solid fa-repeat"></i>
                    </button>
                </div>
                <div>
                    <button className="likes-btn">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div>
                    <button className="remove-btn">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}