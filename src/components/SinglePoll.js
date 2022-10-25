import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
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
  useEffect(() => {
    const uri = `http://localhost:4000/api/v1/poll/${pollId}`;

    (async () => {
      const data = await getSingleData(uri);
      setPoll(data[0]);
    })();
  }, [pollId]);
  console.log(poll);
  return (
    <Container>
      <Card
        body
        className="my-2"
        style={{
          width: "18rem",
        }}
      >
        <CardTitle tag="h5">{poll?.title}</CardTitle>
        <CardText>{poll?.description}</CardText>
        <CardBody>
          <h6>Options</h6>
          {poll?.options?.map((value, index) => (
            <FormGroup key={index} check>
              <Input type="radio" name="option" />
              <Label check>{value.name}</Label>
            </FormGroup>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
};

export default SinglePoll;
