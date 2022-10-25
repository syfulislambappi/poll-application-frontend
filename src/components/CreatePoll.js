import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import postData from "../utils/sendData";

const CreatePoll = () => {
  // Poll option input fields
  const [optionList, setOptionList] = useState([
    { option: "" },
    { option: "" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle poll option value
  const handleOptionValue = (e, index) => {
    const { name, value } = e.target;
    const options = [...optionList];

    options[index][name] = value;
    setOptionList(options);
  };

  // Necessary request Info
  const options = optionList.map((value) => value.option);
  const requestBody = { title, description, options };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  };
  const uri = `http://localhost:4000/api/v1/poll/create`;

  // Handle form submit with post request
  const handleOnSubmit = (e) => {
    e.preventDefault();
    postData(uri, requestOptions);
    setTitle("");
    setDescription("");
    setOptionList([{ option: "" }, { option: "" }]);
  };

  return (
    <Container
      style={{
        width: "500px",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Create Poll</h1>
      <Form onSubmit={handleOnSubmit} style={{ width: "100%" }}>
        <FormGroup>
          <Label for="poll">Poll Title</Label>
          <Input
            id="poll"
            name="title"
            placeholder="Enter poll title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Poll Description</Label>
          <Input
            id="desc"
            name="description"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="opt">Poll Options</Label>
          {optionList.map((value, index) => (
            <Input
              key={index.toString()}
              id="opt"
              name="option"
              placeholder="Enter option..."
              value={value.option}
              onChange={(e) => handleOptionValue(e, index)}
              type="text"
              style={{ width: "50%", marginBottom: "20px" }}
            />
          ))}
        </FormGroup>
        <Button
          type="button"
          onClick={() =>
            setOptionList((prevState) => [...prevState, { option: "" }])
          }
          color="success"
        >
          Add Option
        </Button>
        <Button style={{ marginLeft: "10px" }} color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePoll;
