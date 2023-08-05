import React from "react";
import { styled } from "styled-components";

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
  justify-content: center;
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
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact US</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write Your Message" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};
