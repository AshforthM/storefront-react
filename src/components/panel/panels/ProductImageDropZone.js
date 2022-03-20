import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from 'styled-components';

export default function ProductImageDropBox({ setPreviewImagePath, ...props }) {
  const onDrop = useCallback((acceptedFiles) => {
    const path = acceptedFiles[0];

    setPreviewImagePath(URL.createObjectURL(path));
  }, []);
  const {
    getRootProps,
    getInputProps,

    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg,image/jpg,image/png",
    maxFiles: 1,
    onDrop,
  });

  function workingThing() {
    console.log("look");
  }

  return (
    <ProductImageDropBoxStyles
      {...getRootProps({ isFocused, isDragAccept, isDragReject })}
    >
      <input {...getInputProps()} onChange={workingThing} />
      <p>Product Image Upload</p>
    </ProductImageDropBoxStyles>
  );
}

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
  }

const ProductImageDropBoxStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1rem;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #f8fafc;
  color: #94a3b8;
  outline: none;
  transition: border 0.24s ease-in-out;
  font-size: 14px;
  margin-bottom: 1rem;
  :hover {
    border-color: cornflowerblue;
    background-color: #eff6ff;
  }
`;
