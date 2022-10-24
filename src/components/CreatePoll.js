import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
const CreatePoll = () => {
  const [options, setOptions] = useState([1, 2]);
  return (
    <Form>
      <FormGroup>
        <Label for="poll">Poll Title</Label>
        <Input
          id="poll"
          name="title"
          placeholder="Enter poll title..."
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="desc">Poll Description</Label>
        <Input id="desc" name="description" type="textarea" />
      </FormGroup>
      <FormGroup>
        <Label for="opt">Poll Options</Label>
        {options.map((value) => (
          <Input
            key={value.toString()}
            id="opt"
            name="options"
            placeholder="Enter option..."
            type="text"
            style={{ width: "50%", marginBottom: "20px" }}
          />
        ))}
      </FormGroup>
      <Button
        type="button"
        onClick={() => setOptions(options.push(options.length))}
      >
        Add Option
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreatePoll;
