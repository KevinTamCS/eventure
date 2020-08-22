import React from 'react';
import propTypes from 'prop-types';
import Category from '../Category';
import { CategoriesContainer } from './styles';

import musicImage from 'assets/categories/music.jpg';
import photographyImage from 'assets/categories/photography.jpg';
import artsImage from 'assets/categories/arts.jpg';
import booksImage from 'assets/categories/books.jpg';
import foodAndDrinkImage from 'assets/categories/food-and-drink.jpg';
import scienceAndTechImage from 'assets/categories/science-and-tech.jpg';
import livePerformancesImage from 'assets/categories/live-performances.jpg';
import educationAndLearningImage from 'assets/categories/education-and-learning.jpg';
import homeAndLifestyleImage from 'assets/categories/home-and-lifestyle.jpg';
import healthAndWellnessImage from 'assets/categories/health-and-wellness.jpg';
import sportsAndFitnessImage from 'assets/categories/sports-and-fitness.jpg';
import filmAndMediaImage from 'assets/categories/film-and-media.jpg';
import lgbtqImage from 'assets/categories/lgbtq.jpg';
import movementsImage from 'assets/categories/movements.jpg';
import careerAndBusinessImage from 'assets/categories/career-and-business.jpg';
import hobbiesImage from 'assets/categories/hobbies.jpg';
import gamesAndFunImage from 'assets/categories/games-and-fun.jpg';
import languageAndCultureImage from 'assets/categories/language-and-culture.jpg';
import socialImage from 'assets/categories/social.jpg';
import fashionImage from 'assets/categories/fashion.jpg';

const Categories = (props) => {
  return (
    <CategoriesContainer>
      <Category
        categoryId="music"
        categoryImage={musicImage}
        categoryTitle="Music"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="photography"
        categoryImage={photographyImage}
        categoryTitle="Photography"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="arts"
        categoryImage={artsImage}
        categoryTitle="Arts"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="books"
        categoryImage={booksImage}
        categoryTitle="Books"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="foodAndDrink"
        categoryImage={foodAndDrinkImage}
        categoryTitle="Food & Drink"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="scienceAndTech"
        categoryImage={scienceAndTechImage}
        categoryTitle="Science & Tech"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="livePerformances"
        categoryImage={livePerformancesImage}
        categoryTitle="Live Performances"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="educationAndLearning"
        categoryImage={educationAndLearningImage}
        categoryTitle="Education & Learning"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="homeAndLifestyle"
        categoryImage={homeAndLifestyleImage}
        categoryTitle="Home & Lifestyle"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="healthAndWellness"
        categoryImage={healthAndWellnessImage}
        categoryTitle="Health & Wellness"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="sportsAndFitness"
        categoryImage={sportsAndFitnessImage}
        categoryTitle="Sports & Fitness"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="filmAndMedia"
        categoryImage={filmAndMediaImage}
        categoryTitle="Film & Media"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="lgbtq"
        categoryImage={lgbtqImage}
        categoryTitle="LGBTQ"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="movements"
        categoryImage={movementsImage}
        categoryTitle="Movements"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="careerAndBusiness"
        categoryImage={careerAndBusinessImage}
        categoryTitle="Career & Business"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="hobbies"
        categoryImage={hobbiesImage}
        categoryTitle="Hobbies"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="gamesAndFun"
        categoryImage={gamesAndFunImage}
        categoryTitle="Games & Fun"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="languageAndCulture"
        categoryImage={languageAndCultureImage}
        categoryTitle="Language & Culture"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="social"
        categoryImage={socialImage}
        categoryTitle="Social"
        preferredCategories={props.preferredCategories}
      />
      <Category
        categoryId="fashion"
        categoryImage={fashionImage}
        categoryTitle="Fashion"
        preferredCategories={props.preferredCategories}
      />
    </CategoriesContainer>
  );
};

Categories.propTypes = {
  preferredCategories: propTypes.object,
};

export default Categories;
