import React, { useEffect, useState } from 'react'
import MessageForm from '../../vendorComponents/materialUi/input/MessageForm'
import FineSep from '../sep/FineSep';
import AddIcon from '@material-ui/icons/Add';
import ExtendedBtn from '../buttons/ExtendedBtn';
import { CircularProgress } from '@material-ui/core';
import Comments from './Comments';
import displayAfter from '../hoc/displayAfter';
import axios from 'axios';

let getMsg = async (id?: string) => {

    return await axios.get(`/api/comments/${id}`)
        .then((res) => {
            return res;
        })
        .catch(function (error) {
            console.log(error);
        })

}
export default function MessageInterface(props: { id: string }) {
    let [comments, setComments] = useState([]);
    let [numComToShow, setNumComToShow] = useState(3);
    useEffect(() => {
        getMsg()
            .then((result: any) => {
                let orderList = result.data.map((el: any) => {
                    return { author: el.name, date: new Date().toLocaleDateString(), msg: el.text };
                });
                setComments(orderList);
            });

    }, [setComments]);

    return (
        <div className="message-interface">
            <h3>הוסף תגובה</h3>
            <MessageForm action={`/api/comments/${props.id}`} />
            <FineSep dashed />
            <h3>תגובות ({comments.length})  </h3>

            {comments.length === 0 ? <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}><CircularProgress /></div>
                :
                comments.filter((comment, index) => index < numComToShow).map((comment, index) => {
                    let DisplayWithTime = displayAfter(index, () => <Comments comments={comment} key={index} />);
                    return <DisplayWithTime key={index} />;
                })}
            <div style={{
                display: 'flex', justifyContent: 'center'
            }}>
                {numComToShow < comments.length && < ExtendedBtn onClick={() => setNumComToShow(numComToShow + 3)} customStyle={{ backgroundColor: '#03a9f4', color: '#fff', margin: "20px 0" }}>
                    <span>הצג עוד</span>
                    <AddIcon />
                </ExtendedBtn>}
            </div >
        </div >
    )
}
