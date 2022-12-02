import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import commentsAction from "../redux/actions/commentsAction";
import Swal from "sweetalert2";


export default function CommentsCard(props) {
    const [open2, setOpen2] = useState(false);
    const { id, token } = useSelector((state) => state.userReducer);
    let { eventId } = props;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    let [reload, setReload] = useState(true);

    const { getComment, createComment, deleteComment, editComment } =
        commentsAction;
    let [comments, setComments] = useState([]);

    console.log(comments);
    const handleOpen2 = () => {
        open2 ? setOpen2(false) : setOpen2(true);
    };

    useEffect(() => {
        getMyComments()
        // eslint-disable-next-line 
    }, [reload]);



    async function getMyComments() {
        let res = await dispatch(getComment({ id: eventId }));
        setComments(res.payload.comments);
    }

    const handleOpen = () => {
        open ? setOpen(false) : setOpen(true);
    };

    let information = useRef(); 
    let comment = useRef();
    console.log(comment)


    async function newComment(event) {
        event.preventDefault();
        let newComment = {
            userId: id,
            showId: eventId,
            comment: comment.current.value,
            date: "02-12-2022",
        };
        Swal.fire({
            icon: "question",
            title: " Do you want to post a comment?",
            showConfirmButton: true,
            iconColor: "#01344f",
            confirmButtonColor: "#01344f",
            confirmButtonText: "Yes",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    headers: token,
                    data: newComment,
                };
                try {
                    await dispatch(createComment(data));
                    setReload(!reload);
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: "warning",
                        confirmButtonColor: "#01344f",
                        iconColor: "#01344f",
                        title: error.response.data.message.join("<br/>"),
                        showConfirmButton: true,
                    });
                }
                
            }
        });
    }

    async function editComments(event) {
        event.preventDefault();
        let edit = {
            userId: id,
            showId: eventId,
            comment: comment.current.value,
            date: "02-02-2023",
        };


        Swal.fire({
            icon: "question",
            title: " Do you want to post a comment?",
            showConfirmButton: true,
            iconColor: "#01344f",
            confirmButtonColor: "#01344f",
            confirmButtonText: "Yes",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                let data = {
                    id: event.target.name,
                    token: token,
                    edit: edit,
                };
                try {
                    await dispatch(editComment(data));
                    setReload(!reload)
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        icon: "warning",
                        confirmButtonColor: "#01344f",
                        iconColor: "#01344f",
                        title: error.response.data.message.join("<br/>"),
                        showConfirmButton: true,
                    });
                }
            }
        });
    }

    return (
        <div>
            <form class=" textarea" onSubmit={newComment} ref={information}>
                <div className="sub">
                    <input placeholder="Leave your comment" type="text" className=" textarea1" name="comment" ref={comment}
                    />
                    <div>
                        <div class="flex g-25">
                            <input
                                class="btn btn-primary btn-sm shadow-none"
                                type="submit"
                                value="Post comment"
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="btn-view">
                <h4 onClick={handleOpen} className="pointer">
                    {open ? "Close " : ""}
                    View Comments
                </h4>
            </div>
            {open ? (
                <div>
                    {comments?.map((item) => {
                        function deleteFunc() {
                            Swal.fire({
                                icon: "question",
                                title: " Do you want to post a comment?",
                                showConfirmButton: true,
                                iconColor: "#01344f",
                                confirmButtonColor: "#01344f",
                                confirmButtonText: "Yes",
                                showCancelButton: true,
                            }).then(async (result) => {
                                if (result.isConfirmed) {
                                    await dispatch(deleteComment({ idComment: item._id, token }));
                                }
                                setReload(!reload);
                            });
                        }
                        return (
                                <div className={
                                    item.userId.logged === true ? ("containerCard-logged")
                                : ("containerCard2")}>
                                    <div>
                                        <div className="flex g-25 align-center">
                                            <div>
                                                <img src={item?.userId?.photo}  className="img-coment"/>
                                            </div>
                                            <div>
                                                <h6>{item?.userId?.name} </h6>
                                            </div>
                                        </div>
                                        <div className="flex column g-25">
                                            <p className="comment-text">{item.comment}</p>
                                            {item?.userId?._id === id ? (
                                                <div className="flex justify-end w-100 g-25">
                                                    <div className="delete edit-B">
                                                        <h5 onClick={handleOpen2}>
                                                            {open2 ? "Close" : ""}
                                                            <img src="../img/editarIcon.png" width="50px" alt="img" />
                                                        </h5>
                                                        <div>
                                                            {open2 ? (
                                                                <form className=" textarea" ref={information}>
                                                                    <div className="div-edit">
                                                                        <input
                                                                            defaultValue={comments?.comment}
                                                                            type="text "
                                                                            className=" textarea2"
                                                                            name="comment"
                                                                            ref={comment}
                                                                        />
                                                                        <div>
                                                                            <div class="flex g-25">
                                                                                <input
                                                                                    type="submit"
                                                                                    value="Edit comment"
                                                                                    className="delete"
                                                                                    onClick={editComments}
                                                                                    name={item._id}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="delete">
                                                        <img
                                                            src="../img/tacho.png"
                                                            width="50px"
                                                            alt="img"
                                                            onClick={deleteFunc}
                                                        />
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}