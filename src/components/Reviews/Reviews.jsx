import { fetchReviews } from 'API/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();
  const isLoaded = review !== null;

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
        {!isLoaded && <div>Loading</div>}
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
