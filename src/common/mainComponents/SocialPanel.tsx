import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CommentIcon from '@material-ui/icons/Comment';
export default function SocialPanel(props: { viewNum: number, commentsNum: number, likeNum: number }) {

    let [liked, setliked] = useState(false);
    let [likeSum, setLikeSum] = useState(props.likeNum);
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
                <span><VisibilityIcon /> <span className="only-desktop">views</span><span className="view-num">{props.viewNum}</span></span>
                <span><CommentIcon /><span className="only-desktop">comments</span><span className="comment-num">{props.commentsNum}</span></span>
            </div>
            <span className="social-network">
                <FacebookIcon className="facebook" />
                <LinkedInIcon className="linkedin" />
                <TwitterIcon className="twitter" />
            </span>
            <div className="likes" onClick={handleLike}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}<span>{likeSum}</span>
            </div>
        </div>
    )
}
