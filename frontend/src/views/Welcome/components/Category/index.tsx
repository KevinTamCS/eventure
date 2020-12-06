import React, { useState } from 'react';
import {
  Card,
  CategoryContainer,
  Image,
  Title,
  TitleContainer,
} from './styles';

interface Props {
  preferredCategories: Set<string>;
  categoryId: string;
  categoryImage: string;
  categoryAlt?: string;
  categoryTitle: string;
}

const Category: React.FC<Props> = (props) => {
  const {
    preferredCategories,
    categoryId,
    categoryImage,
    categoryAlt,
    categoryTitle,
  } = props;

  const [isSelected, setSelected] = useState<boolean>(
    preferredCategories.has(categoryId)
  );

  const handleClick = (): void => {
    if (isSelected) {
      preferredCategories.delete(categoryId);
    } else {
      preferredCategories.add(categoryId);
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
        <Image src={categoryImage} alt={categoryAlt} />
        <TitleContainer>
          <Title>{categoryTitle}</Title>
        </TitleContainer>
      </Card>
    </CategoryContainer>
  );
};

export default Category;
