import React, { useReducer, useEffect } from "react";
import { Table, Accordion, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SortableHeader from "../components/SortableHeader";
import TableDataReducer from "../data/TableDataReducer";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const navigate = useNavigate();

  const initialState = {
    tableData: [],
    sortedData: [],
    sortConfig: { key: "user", direction: "natural" },
  };

  const [state, dispatch] = useReducer(TableDataReducer, initialState);

  useEffect(() => {
    if (posts.length && users.length && comments.length) {
      const tableData = posts.map((p) => {
        return {
          user: users.find((u) => u.id === p.userId),
          post: p,
          comments: comments.filter((c) => c.postId === p.id),
        };
      });
      dispatch({ type: "SET_DATA", payload: { tableData } });
    }
  }, [posts, users, comments]);

  const requestSort = (key, direction) => {
    dispatch({ type: "SORT", payload: { key, direction } });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lab 5</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <SortableHeader
              label="User"
              sortKey="user"
              sortConfig={state.sortConfig}
              requestSort={requestSort}
            />
            <SortableHeader
              label="Post Title"
              sortKey="postTitle"
              sortConfig={state.sortConfig}
              requestSort={requestSort}
            />
            <SortableHeader
              label="Comment Count"
              sortKey="commentCount"
              sortConfig={state.sortConfig}
              requestSort={requestSort}
            />
          </tr>
        </thead>
        <tbody>
          {state.sortedData.map((row) => (
            <tr key={row.post.id}>
              <td>
                <Link to={`/lab5/users/${row.user.id}`}>{row.user.name}</Link>
              </td>
              <td>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{row.post.title}</Accordion.Header>
                    <Accordion.Body>{row.post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td>
                <Button
                  variant="link"
                  onClick={() => navigate(`/lab5/posts/${row.post.id}/comments`)}
                >
                  {row.comments.length}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Lab5;