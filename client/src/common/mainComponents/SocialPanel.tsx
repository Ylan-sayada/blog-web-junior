import React, { useRef, useState, useEffect } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CommentIcon from '@material-ui/icons/Comment';
export default function SocialPanel(props: { viewNum: number, commentsNum: number, likeNum: number, serverReq?: Function }) {
    let [likeState, setlikeState] = useState({ liked: false, likeSum: props.likeNum });
    //let likeRef = useRef(document.createElement("span"));
    let usePrevious = (value: any) => {
        let ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    let previousLike = usePrevious(props.likeNum);
    useEffect(() => {
        if (previousLike !== props.likeNum) {
            setlikeState({ ...likeState, likeSum: props.likeNum })
        }
    }, [props.likeNum, likeState, previousLike])
    let handleLike = () => {
        if (likeState.liked) {
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
                {likeState.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}<span>{likeState.likeSum}</span>
            </div>
        </div>
    )
}
