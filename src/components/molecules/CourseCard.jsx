import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CourseCard = ({id, title, image, price, professor}) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png" alt="Curso GO" />
            </div>
          </div>
          <span className="small">{professor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <Link className="button--ghost-alert button--tiny" to={`/cursos/${id}`}> {`$ ${price} USD`} </Link>
      </div>
    </div>
  </article>
);

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string,
}

CourseCard.defaultProps = {
  title: 'No se encontró título',
  image: '',
  price: '0',
  professor: '',
}

export default CourseCard;