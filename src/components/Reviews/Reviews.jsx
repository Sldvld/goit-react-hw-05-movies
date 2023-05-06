import { fetchReviews } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(setReview);
    console.log(fetchReviews());
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      <ul>
        {review.map(({ id, content, author }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
