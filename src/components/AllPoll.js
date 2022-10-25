import React, { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import getData from "../utils/getData";

const AllPoll = () => {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    const uri = `http://localhost:4000/api/v1/poll`;
    (async () => {
      const data = await getData(uri);
      setPolls(data);
    })();
  }, []);
  return (
    <Container style={{ width: "700px", marginTop: "30px" }}>
      <h1>All Polls:</h1>
      <ListGroup>
        {polls.map((poll) => (
          <ListGroupItem
            action
            tag="button"
            key={poll?._id}
            style={{ fontWeight: "bold" }}
          >
            {poll?.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AllPoll;
