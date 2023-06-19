import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "../styles/Button";
import {useTranslation} from "react-i18next";


const Comment = ({id}) => {
    const { t, i18n } = useTranslation();

    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem(`comments_${id}`);
        return savedComments ? JSON.parse(savedComments) : [];
    });
    const [newComment, setNewComment] = useState("");
    const [newRating, setNewRating] = useState(0);
    const [newName, setNewName] = useState("");

    useEffect(() => {
        const savedComments = localStorage.getItem(`comments_${id}`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, [id]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [comments, id]);

    const handleAddComment = () => {
        if (newComment && newRating && newName) {
            const comment = {
                name: newName,
                content: newComment,
                rating: newRating,
            };

            setComments((prevComments) => {
                const updatedComments = { ...prevComments };
                if (updatedComments[id]) {
                    updatedComments[id] = [...updatedComments[id], comment];
                } else {
                    updatedComments[id] = [comment];
                }
                return updatedComments;
            });

            setNewComment("");
            setNewRating(0);
            setNewName("");

            localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
        }
    };

    const handleRatingChange = (rating) => {
        setNewRating(rating);
    };

    return (
        <Wrapper>
            <div className="container-comment">
                <h3 className="line">{t('cmtReview')}</h3>
                <ul className="comment-list">
                    {comments[id]?.map((comment, index) => (
                        <li key={index}>
                            <div className="show">
                                <div className="grid grid-two-column">
                                    <p><b>{comment.name}</b></p>
                                    <div className="rating">
                                        {Array.from(Array(comment.rating), (e, i) => (
                                            <span key={i} className="star">&#9733;</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p>{comment.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="conn">
                <div className="form">
                    <h3 className="heading">{t('addCmt')}</h3>
                    <div className="comment-form">
                        <div className="a">
                            <input className="input"
                                   type="text"
                                   value={newName}
                                   onChange={(e) => setNewName(e.target.value)}
                                   placeholder={t('enterName')}
                            />
                        </div>

                        <input className="input"
                               value={newComment}
                               onChange={(e) => setNewComment(e.target.value)}
                               placeholder={t('enterCmt')}
                        />
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <span
                                    key={rating}
                                    className={`star ${newRating >= rating ? 'active' : ''}`}
                                    onClick={() => handleRatingChange(rating)}
                                >
                                &#9733;
                            </span>
                            ))}
                        </div>
                        <Button onClick={handleAddComment}>{t('submit')}</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding-top: 3rem;
  .container-comment {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: auto;
    height: auto;
    justify-content: center;
    align-content: center;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    
    .line{
      border-bottom: 1px solid #282c34;
    }
    
  }
  .comments-container {
    margin-top: 20px;
  }
  
  .comments-container h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .comment-list {
    list-style: none;
  }
  .comment-list li{
    padding: 10px;
  }
  .show{
    width: 50px;
  }
  .rating {
    color: #fdd835;
    font-size: 20px;
  }
  
  .rating . star {
    padding-bottom: 2rem;
    display: inline-block;
    margin-left: 100px;
    cursor: pointer;
  }
  .rating .star.active {
    color: darkorange;
  }
  .conn{
    padding-top: 3rem;
  }
  .form {
    padding: 2rem ;
    text-align: center;
    background-color: aliceblue;
    border-radius: 5rem;
    max-width: 35rem;
    height: 30rem;
    margin: auto;
  }
  .heading{
    padding: 2rem;
  }
  .comments-form {
    margin-top: 20px;
  }
  .a{
    padding-bottom: 2rem;
  }
  .input{
    text-transform: none;
  }
  .comments-form textarea {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    text-transform: none;
  }
  .comments-form input[type="number"]{
    display: block;
    width: 50px;
    margin-bottom: 10px;
    padding: 5px;
    text-transform: none;
  }
  //textarea{
  //  border: 1px solid #282c34;
  //  border-radius: 0.2rem;
  //  width: 300px;
  //  height: 300px;;
  //  margin: 20px 0;
  //  //padding: 20px;
  //}
  button{
    border: 1px solid #282c34;
    border-radius: 0.5rem;
    width: auto;
    height: 50px;
  }
`;
export default Comment;