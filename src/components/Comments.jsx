import React, { useEffect, useState } from 'react';
import Pagination from './Pagination'; // Importing the Pagination component
import './Comments.css'; // Import your CSS

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await res.json();
      setComments(data);
      setLoading(false);
    };

    fetchComments();
  }, []);

  // Get current comments for the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Total number of pages
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className="comments-container">
      <h1 className="comments-title">Comments</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="comment-list">
          {currentComments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <h5 className="comment-name">{comment.name}</h5>
              <p className="comment-body">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Comments;
