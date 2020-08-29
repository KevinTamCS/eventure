import styled from 'styled-components/macro';
import Row from 'react-bootstrap/cjs/Row';
import { Button } from 'components/Button';

export const Description = styled.p`
  //margin-bottom: 0;
`;

export const BannerContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  background-color: #f0f0f0;
  border: 2px dashed #bababa;
  border-radius: 5px;
  transition: 0.2s;
  transition-timing-function: ease-in-out;

  &&& {
    padding: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 5px #cccccc;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 3px #939393;
  }

  &.Dropzone-active {
    background-color: #fcfcfc;
    border: 2px solid #bababa;
    box-shadow: 0 0 10px #cccccc;
  }

  &.Dropzone-accepted {
    background-color: unset;
    border: none;
    transition: 0.4s;

    // Override 1.5rem padding-bottom
    &&& {
      padding: 0;
    }
  }
`;

export const FileInput = styled.input``;

export const AddImageIcon = styled.img`
  -webkit-user-drag: none;
`;

export const DropzoneIconAndText = styled.div``;

export const UploadText = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

export const FileTypeText = styled.p``;

export const UploadSuccessText = styled.p`
  margin-bottom: 0;
`;

export const UploadedImageContainer = styled.div`
  position: relative;

  &:after {
    display: block;
    content: '';
    padding-bottom: 56.25%;
  }
`;

export const UploadedImage = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 5px;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25));
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  -webkit-user-drag: none;

  &:focus {
    box-shadow: 0 0 0 50px #505050;
  }
`;

export const EditBannerControls = styled(Row)`
  margin: 0 0.1rem;
  padding-top: 1.25rem;

  button {
    width: 100%;
  }
`;

export const ChangeBannerButton = styled(Button)`
  &&&:hover {
    box-shadow: none;
  }

  &&&&:active {
    box-shadow: none;
  }

  &&&:focus {
    //box-shadow: none;
  }
`;

export const RemoveBannerButton = styled(Button)`
  background-color: #fc5050;

  &&&:hover {
    box-shadow: none;
    background-color: #ff6a6a;
  }

  &&&&:active {
    box-shadow: none;
    background-color: #ff0000;
  }

  &&&:focus {
    box-shadow: 0 0 0 3px lightcoral;
    background-color: #f82222;
  }
`;
