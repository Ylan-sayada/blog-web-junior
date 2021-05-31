import React from 'react';
import { useParams } from 'react-router-dom';
import RoundedIcone from '../components/ect/RoundedIcone';
import me from '../../ressources/img/me.jpeg';
import Img from '../components/ect/Img';
import FineSep from '../components/sep/FineSep';
import SocialPanel from './SocialPanel';

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
// interface propsArticle {
//     id: number,
//     img: string,
//     title: string,
//     desc: string
//     publishDate: Date,
//     commentsNum: number,
//     viewNum: number,
//     likeNum: number,
//     column?: boolean
// }
export default function Article() {
    let { id }: { id: string } = useParams();

    return (
        <div className="article" dir="rtl">
            <div className="head-article">
                <h1>{article.title}</h1>
                <div className="publication-desc">
                    <RoundedIcone image={me} />
                    <div className="text-desc">
                        <span className="author-name">{article.author}</span>
                        <span className="sub-desc" >פורסם ב-{article.publishDate.toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="content">
                    <Img src={article.img} />
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus mollitia dicta ipsum dolori</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laborum mollitia hic fugiat aspernatur excepturi minima magni quidem incidunt reiciendis. Vitae sit deserunt aut temporibus, excepturi sint adipisci dolor deleniti!
                    Praesentium tempora libero natus magni modi fuga hic dolores adipisci, architecto assumenda, fugit minus eum error similique beatae accusamus nesciunt nihil tempore ipsam. Sunt unde ratione at, ut ab nesciunt?
                    Laborum dolores porro enim quia nemo aliquid labore. Cumque facere dolorum minus repellendus distinctio consectetur. Esse explicabo quam recusandae autem eveniet sunt excepturi! Molestias, unde. Accusamus modi voluptatem a vel.
                    Deserunt provident fuga ex quis itaque a dicta ipsa eveniet cum similique eaque, possimus corporis nesciunt dignissimos officia! Consequuntur officia ab consectetur voluptate distinctio nulla veritatis veniam fuga sequi exercitationem.
                Unde deleniti in dolorem amet excepturi officiis molestiae minus asperiores sed autem facilis, accusamus necessitatibus quas minima possimus repellendus numquam nam dolor voluptate cum esse. Ratione expedita eligendi autem aut!</p>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus mollitia dicta ipsum dolori</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minus repudiandae culpa nostrum temporibus nobis laboriosam animi nesciunt, fugit quaerat ducimus praesentium dolor consequuntur, tempora quae earum voluptate, error similique?</p>
                </div>
                <FineSep />
                <SocialPanel id={id} />
            </div>
        </div>
    )
}
