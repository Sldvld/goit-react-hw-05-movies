import { fetchReviews } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId)
      .then(setReview)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!review) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul className={css.reviewsList}>
        {review.map(({ id, content, author }) => (
          <li className={css.reviewsItem} key={id}>
            <p className={css.reviewAuthor}>{author}</p>
            <p className={css.reviewContent}>{content}</p>
          </li>
        ))}
      </ul>
      {!review.length && <p>This movie has no reviews.</p>}
    </>
  );
}
