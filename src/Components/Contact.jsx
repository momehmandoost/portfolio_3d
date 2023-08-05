import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import MapChart from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  font-family: Inter;
  padding: 15px;
  background-color: #eeeeee;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  font-family: Inter;
  padding: 15px;
  background-color: #eeeeee;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ff00aa;
  font-family: Inter;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
`;

const Right = styled.div`
  flex: 1;
`;

export const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  console.log(import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact US</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write Your Message"
              rows={10}
              name="message"
            />
            <Button type="submit">Send</Button>
            {success && "Your message sent:)"}
            {error && "something went wrong;)"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};
