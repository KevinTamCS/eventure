import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Card,
  CategoryContainer,
  Image,
  Title,
  TitleContainer,
} from './styles';

const Category = (props) => {
  const categoryId = props.categoryId;

  const [isSelected, setSelected] = useState(
    props.preferredCategories.has(categoryId)
  );

  const handleClick = () => {
    if (isSelected) {
      props.preferredCategories.delete(categoryId);
    } else {
      props.preferredCategories.add(categoryId);
    }

    setSelected(!isSelected);
  };

  return (
    <CategoryContainer>
      {/* Fall back to normal CSS for card selected effect due to the component re-rendering itself if done in Styled Components */}
      <Card
        className={!isSelected ? '' : 'CategoryCard-selected'}
        onClick={handleClick}
      >
        <Image src={props.categoryImage} alt={props.categoryAlt} />
        <TitleContainer>
          <Title>{props.categoryTitle}</Title>
        </TitleContainer>
      </Card>
    </CategoryContainer>
  );
};

Category.propTypes = {
  preferredCategories: propTypes.object.isRequired,
  categoryId: propTypes.string.isRequired,
  categoryImage: propTypes.string.isRequired,
  categoryAlt: propTypes.string,
  categoryTitle: propTypes.string.isRequired,
};

export default Category;
