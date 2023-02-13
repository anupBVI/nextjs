import { Comments } from "/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = Comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    Comments.splice(index, 1);
    res.status(200).json(deletedComment);
  } else if (req.method === "PUT") {
    const updatedComment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = Comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    updatedComment.comment = req.body.comment;
    Comments[index] = updatedComment;
    res.status(200).json(updatedComment);
  }
}
