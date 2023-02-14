import { useState } from "react";
import { Comments as cData } from "@/data/comments";
function Comments() {
  const [comments, setcomments] = useState([]);
  const [comment, setComment] = useState("");

  const [edit, setEdit] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const fetchComments = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    setcomments(data);
  };
  const postComment = async () => {
    const res = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

 



  return (
    <div>
      <input type="text" value={comment} onChange={handleChange} />
      <button onClick={postComment}> Add Comment </button>
      
      <button onClick={fetchComments}> Fetch Comments</button>
      <br />
      <br />
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>
              {" "}
              {comment.id}. {comment.comment}
            </h3>{" "}
            <button onClick={() => deleteComment(comment.id)}>
              Delete Comment
            </button>
            {/* <button onClick={() => editComment(comment.id)}>
              Edit Comment
            </button> */}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
