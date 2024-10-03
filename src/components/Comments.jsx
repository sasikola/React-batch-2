import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Pagination from "./Pagination"; // Import your custom Pagination component
import "./Comments.css";

const Comments = ({ api }) => {
  console.log(api);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10; // Fixed number of comments per page

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  // Get current comments for the current page
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // Column definitions for ag-Grid
  const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Comment", field: "body", sortable: true, filter: true },
  ];

  const gridStyle = {
    height: "500px",
    width: "100%",
  };

  return (
    <div className="comments-container">
      <h1 className="comments-title">Comments</h1>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(comments.length / commentsPerPage)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="ag-theme-quartz" style={gridStyle}>
            <AgGridReact
              rowData={currentComments}
              columnDefs={columns}
              defaultColDef={{ sortable: true, filter: true }}
              pagination={false} // Disable ag-Grid's built-in pagination
            />
          </div>

          {/* Custom Pagination Component */}
        </>
      )}
    </div>
  );
};

export default Comments;
