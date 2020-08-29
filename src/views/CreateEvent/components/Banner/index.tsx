import React, { useState } from 'react';
import { FormikProps } from 'formik';
import Dropzone from 'react-dropzone';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import { EventForm } from '../../index';
import 'react-toastify/dist/ReactToastify.css';
import addImageIcon from 'assets/icons/add-image.svg';
import { Fieldset, FormSection, Legend } from '../../styles';
import {
  AddImageIcon,
  BannerContainer,
  ChangeBannerButton,
  Description,
  DropzoneIconAndText,
  EditBannerControls,
  FileInput,
  FileTypeText,
  RemoveBannerButton,
  UploadedImage,
  UploadedImageContainer,
  UploadText,
} from './styles';

interface Props {
  formikProps: FormikProps<EventForm>;
}

const Banner: React.FC<Props> = (props) => {
  const { formikProps } = props;

  const [isFileAccepted, setFileAccepted] = useState<boolean>(false);
  const [uploadedEventBanner, setUploadedEventBanner] = useState<string>();

  const handleOnDrop = (acceptedFiles: File[]): void => {
    // Accept only the first file if multiple files were uploaded
    const file: File = acceptedFiles[0];

    // Check if file is a JPEG or PNG image
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      // Check if file size is more than 10 MB
      if (file.size / (1024 * 1024) <= 10) {
        // File is good, generate image preview
        const reader = new FileReader();
        reader.onload = () => {
          const image = reader.result; // Image as data URL
          // Set the preview to the data URL
          setUploadedEventBanner(image as string);
        };

        reader.onerror = () => {
          toast.error('An error has occurred. Please try again.');
        };

        reader.onabort = () => {
          toast.warning('Image upload aborted!');
        };

        reader.readAsDataURL(file);

        // Set the field value to the file itself
        formikProps.setFieldValue('banner.bannerImage', file);
        setFileAccepted(true);
      } else {
        toast.error(
          'This image is too large! Please upload an image under 10 MB.',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      }
    } else {
      toast.error('Please upload a JPEG or PNG image.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const removeBanner = (): void => {
    formikProps.setFieldValue('banner.bannerImage', undefined);
    setFileAccepted(false);
  };

  return (
    <FormSection>
      <Fieldset>
        <Legend>Banner</Legend>

        <Description>
          The event banner is displayed along with your event. For best results,
          use an image that is at least 1920x1080px (16:9 ratio).
        </Description>
        <Dropzone onDrop={(acceptedFiles) => handleOnDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps, open, isDragActive }) => (
            <>
              <BannerContainer
                className={`${isDragActive ? 'Dropzone-active' : ''} ${
                  isFileAccepted ? 'Dropzone-accepted' : ''
                }`}
                {...getRootProps()}
              >
                <FileInput {...getInputProps()} />
                {!isFileAccepted ? (
                  // Not uploaded
                  <>
                    <DropzoneIconAndText>
                      <AddImageIcon src={addImageIcon} alt="Add image icon" />
                      <UploadText>
                        {
                          // prettier-ignore
                          // Check if user is dragging on top of the container
                          (isDragActive) ? 'Drop image here!'
                          // Change wording based on screen width
                          : (window.innerWidth >= 768) ?
                            //  Tablets and Computers
                            'Drag and drop or click here to add an image.'
                            //  Phones
                            : 'Tap here to add an image.'
                        }
                      </UploadText>
                      <FileTypeText>JPEG or PNG, up to 10 MB.</FileTypeText>
                    </DropzoneIconAndText>
                  </>
                ) : (
                  // Uploaded
                  <>
                    {uploadedEventBanner && (
                      <>
                        <UploadedImageContainer>
                          <UploadedImage src={uploadedEventBanner} alt="" />
                        </UploadedImageContainer>
                      </>
                    )}
                  </>
                )}
              </BannerContainer>
              {/* Show banner edit controls only if there is a banner already uploaded */}
              {isFileAccepted && (
                <EditBannerControls>
                  <Col md>
                    <ChangeBannerButton onClick={open} centered>
                      Change Banner
                    </ChangeBannerButton>
                  </Col>
                  <Col md>
                    <RemoveBannerButton onClick={removeBanner} centered>
                      Remove Banner
                    </RemoveBannerButton>
                  </Col>
                </EditBannerControls>
              )}
            </>
          )}
        </Dropzone>
      </Fieldset>
      <ToastContainer />
    </FormSection>
  );
};

export default Banner;
