import React, { MouseEvent, useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import { Link } from 'react-router-dom';
interface propsArticle {
    img: string,
    title: string,
    desc: string
    publishDate: Date,
    commentsNum: number,
    viewNum: number,
    likeNum: number,
    column?:boolean
    
}
export default function PreviewArticle(props: { article: propsArticle }) {
    
    let { img, title, desc, publishDate, commentsNum, viewNum, likeNum,column } = props.article;
    let [liked, setliked] = useState(false);
    let [likeSum, setLikeSum] = useState(likeNum);
    let handleLike = (e: MouseEvent) => {
        if (!liked) {
            setliked(true);
            setLikeSum(likeSum + 1);
        } else {
            setliked(false);
            setLikeSum(likeSum - 1);
        }
    }
    return (

        <div className={`preview-article ${column &&'column'}`}>
            <Link to="/article"><div className="img-div" style={{ backgroundImage: `url(${img})` }}> </div></Link>
            <div className="desc-preview">
                <Link to="/article"><h4>{title}</h4></Link>
                <span className="sub-desc" dir="rtl" >פורסם ב-{publishDate.toLocaleDateString()}</span>
                <div className="desc"><p>{desc}</p></div>
                <div className="social-info">
                    <div className="view-and-comment">
                        <span><VisibilityIcon /> <span className="only-desktop">views</span><span className="view-num">{viewNum}</span></span>
                        <span><CommentIcon /><span className="only-desktop">comments</span><span className="comment-num">{commentsNum}</span></span>
                    </div>
                    <div className="likes" onClick={handleLike}>
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}<span>{likeSum}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}
