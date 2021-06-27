import React, { useEffect, useState } from 'react'
import MessageForm from '../../vendorComponents/materialUi/input/MessageForm'
import FineSep from '../sep/FineSep';
import AddIcon from '@material-ui/icons/Add';
import ExtendedBtn from '../buttons/ExtendedBtn';
import { CircularProgress } from '@material-ui/core';
import { ReactComponent as SendPost } from '../../../ressources/img/sendPost.svg';
import Comments from './Comments';
import axios from 'axios';


function MessageInterface(props: { id: string }) {
    let [comments, setComments] = useState<any[]>([]);
    let [currentIndex, setCurrentIndex] = useState(3);
    let [numOfArticle, setnumOfArticle] = useState(0);
    let [hasPosted, setHasposted] = useState(false);
    let handlePostMessage = (posted: boolean) => {
        setHasposted(posted);
        setnumOfArticle(numOfArticle + 1);
    }
    let addMsgToDisplay = async (id: string, currentIndex: number) => {
        await axios.get(`/api/comments/${id}/${currentIndex}/3`)
            .then((res) => {
                setCurrentIndex(currentIndex + 3);
                let arrData = res.data.map((el: any) => {
                    return { author: el.name, date: el.date, msg: el.text };
                })
                setComments((previous) => [...previous, ...arrData])

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        let getFirstMsg = async (id?: string) => {
            return await axios.get(`/api/comments/${id}/0/3`)
                .then((res) => {
                    return res;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getFirstMsg(props.id)
            .then((result: any) => {
                let orderList = result.data[1].map((el: any) => {
                    return { author: el.name, date: el.date, msg: el.text };
                });
                setComments(orderList);
                setnumOfArticle(result.data[0]);
            });
    }, [props.id, hasPosted]);

    return (
        <div className="message-interface">
            <h3>הוסף תגובה</h3>
            {hasPosted ? <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", fontSize: "1.2rem", padding: "20px" }}><span>התגובה נשלחה בהצלחה! </span><SendPost /></div> :
                <MessageForm postState={handlePostMessage} id={props.id} action="/api/comments/" />}
            <FineSep dashed />
            <h3>תגובות ({numOfArticle})  </h3>

            {!comments ? <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}><CircularProgress /></div>
                :
                comments.map((comment, index) => <Comments key={index} comments={comment} />)}
            <div style={{
                display: 'flex', justifyContent: 'center'
            }}>
                {numOfArticle > comments.length &&
                    <ExtendedBtn
                        onClick={() => addMsgToDisplay(props.id, currentIndex)}
                        customStyle={{ backgroundColor: '#03a9f4', color: '#fff', margin: "20px 0" }}
                    >
                        <span>הצג עוד</span>
                        <AddIcon />
                    </ExtendedBtn>
                }
            </div >
        </div >
    )

}
export default React.memo(MessageInterface);
