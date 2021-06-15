import React, { useEffect, useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import notFound from '../../ressources/img/not-found.jpg'
import JsxParser from 'react-jsx-parser';
import SendIcon from '@material-ui/icons/Send';
import draftToHtml from 'draftjs-to-html';
import Article from './Article';
import isUndefined from "../../utils/isUndefined";
import { Button, Paper, TextField } from "@material-ui/core";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../ressources/scss/components/AdminSection.scss";
import Modal from "../components/ect/Modal";
export default function AdminEditorSection() {

    let errStateObject = {
        errOnTitle: false,
        errOnDesc: false,
        errOnContent: false,
        errOnImg: false
    };

    JsxParser.defaultProps = {
        autoCloseVoidElements: true,
        allowUnknownElements: true,
        showWarnings: true
    };

    let [error, setError] = useState(errStateObject);
    let titleInput = useRef(document.createElement("input"));
    let descInput = useRef(document.createElement("input"));
    let [preview, setPreview] = useState<any>('');
    let [headerImg, setHeaderImg] = useState<any>(undefined);
    const [open, setOpen] = useState(false);

    let [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    let handleOpen = () => {

        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        setPreview({
            id: 0,
            author: "אילן סיאדה",
            img: isUndefined(headerImg) ? notFound : headerImg.url,
            title: titleInput.current.value,
            desc: descInput.current.value,
            content: <div dangerouslySetInnerHTML={{ __html: content }} />,
            publishDate: new Date(),
            commentsNum: 0,
            viewNum: 0,
            likeNum: 0,
        })
        setOpen(true);
    };

    let handleClose = () => {
        setOpen(false);
    };
    let handleImgUpload = (e: any) => {
        let { files } = e.target;
        let url = URL.createObjectURL(files[0]);
        setHeaderImg({ url, alt: files[0].name.split(".")[0] });
    }
    useEffect(() => {

    }, [editorState]);

    return (
        <div className="admin-section">
            <h1>Article builder</h1>
            <div className="article-editor">
                <form action="" className="article-editor-form">

                    <TextField
                        placeholder="title article "
                        variant="outlined"
                        inputRef={titleInput}
                    />
                    <TextField
                        placeholder="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        inputRef={descInput}
                    />
                    <div className="upload-image">
                        <h3>Image header for preview</h3>

                        {headerImg && <img style={{ width: "20%", height: "auto" }} src={headerImg.url} alt={headerImg.name} />}
                        <Button

                            className="button-color"
                            variant="contained"
                            component="label"
                        >
                            upload image
                            <input

                                onChange={handleImgUpload}
                                accept="image/*"
                                id="image"
                                type="file"
                                hidden
                            />
                        </Button>
                    </div>

                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                    />
                    <div className="final-buttons">
                        <Button
                            className="button-color"
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                        <Button className="button-color" onClick={handleOpen}>Show preview</Button>
                    </div>

                </form>
                {open && <Modal
                    handleClose={handleClose}
                >
                    <Paper
                        elevation={3}
                        className="display-article"
                        style={{ minHeight: "80vh", width: "80%", margin: "auto" }}
                    >
                        <Article article={preview} />
                    </Paper>

                </Modal>}
            </div>


        </div >
    );
}