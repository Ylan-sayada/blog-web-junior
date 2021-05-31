import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
let article = {
    id: 1,
    img: "https://picsum.photos/300/300",
    title: "פוסט נחמד",
    author: "אילן סיאדה",
    desc: "הפוסט הזה נועד לבדיקה.נראה טוב ????",
    publishDate: new Date(),
    commentsNum: 4,
    viewNum: 50,
    likeNum: 2
}
export default function SocialPanel(props: { id: number | string }) {
    let [liked, setliked] = useState(false);
    let [likeSum, setLikeSum] = useState(article.likeNum);
    let handleLike = () => {
        if (!liked) {
            setliked(true);
            setLikeSum(likeSum + 1);
        } else {
            setliked(false);
            setLikeSum(likeSum - 1);
        }
    }
    return (
        <div className="social-info">
            <div className="view-and-comment">
                <span><VisibilityIcon /> <span className="only-desktop">views</span><span className="view-num">{article.viewNum}</span></span>
                <span><CommentIcon /><span className="only-desktop">comments</span><span className="comment-num">{article.commentsNum}</span></span>
            </div>
            <div className="likes" onClick={handleLike}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}<span>{likeSum}</span>
            </div>
        </div>
    )
}
