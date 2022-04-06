import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, ButtonSubmit } from "../../../ui/buttons";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";

export default function UploadFeedback(props) {
    const navigator = useNavigate();

  return (
    <UploadFeedbackStyles>
      {!props.status ? (
        <Feedback>
          <AiOutlineCheckCircle color="59981A" size="12rem" />
          <FeedbackMessage>Product Uploaded Successfully</FeedbackMessage>
        </Feedback>
      ) : (
        <Feedback>
          <AiOutlineCloudUpload color="#fbae2d" size="12rem" />
          <FeedbackMessage>Product Uploading Now</FeedbackMessage>
        </Feedback>
      )}

      <FeedbackOption>
        <ButtonSubmit
          onClick={() => props.writeCompleted(false)}
          disabled={props.status}
        >
          Add Another Product
        </ButtonSubmit>
        <ButtonSubmit onClick={() => navigator('/dashboard')}>View All Products</ButtonSubmit>
      </FeedbackOption>
    </UploadFeedbackStyles>
  );
}

const UploadFeedbackStyles = styled.div`
  width: calc(100% - 289px - 0.1rem);
  margin: 4rem auto 0;
  padding: 0 4rem;
  text-align: center;
`;

const FeedbackMessage = styled.figcaption`
  font-size: 1.75rem;
  font-weight: 600;
`;

const Feedback = styled.figure``;

const FeedbackOption = styled.footer`
  margin-top: 1rem;
  button {
    margin: 0.25rem;
    width: fit-content;
  }
`;
