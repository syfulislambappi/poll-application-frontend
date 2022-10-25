import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import getSingleData from "../utils/getSingleData";

const SinglePoll = () => {
  const { pollId } = useParams();
  const [poll, setPoll] = useState({});
  const [change, setChange] = useState(0);
  const [voteId, setVoteId] = useState("");

  useEffect(() => {
    const uri = `http://localhost:4000/api/v1/poll/${pollId}`;

    (async () => {
      const data = await getSingleData(uri);
      setPoll(data[0]);
    })();
  }, [pollId, change]);

  const radioHandler = (e) => {
    setVoteId(e.target.value);
  };

  const updateVote = () => {
    // Update poll values
    poll.totalVote = poll.totalVote + 1;
    const vote = poll?.options?.find((value) => value._id === voteId);
    vote.vote = vote.vote + 1;

    // Update information
    const uri = `http://localhost:4000/api/v1/poll/${pollId}`;
    const updateData = { pollId, voteId };

    // Update request
    (async () => {
      await fetch(uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updateData),
      });
    })();
    setChange((prevState) => prevState + 1);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        body
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardTitle tag="h5">{poll?.title}</CardTitle>
        <CardText>{poll?.description}</CardText>
        <CardText>{poll?.totalVote}</CardText>
        <CardBody>
          <h6>Options</h6>
          {poll?.options?.map((value, index) => (
            <FormGroup
              key={index}
              check
              style={{ display: "flex", justifyContent: "space-between" }}
              onChange={radioHandler}
            >
              <div>
                <Input type="radio" name="option" value={value._id} />
                <Label check>{value.name}</Label>
              </div>
              <span>{((value.vote / poll?.totalVote) * 100).toFixed(2)}%</span>
            </FormGroup>
          ))}
        </CardBody>
        <Button color="primary" onClick={updateVote}>
          Vote
        </Button>
      </Card>
    </Container>
  );
};

export default SinglePoll;
