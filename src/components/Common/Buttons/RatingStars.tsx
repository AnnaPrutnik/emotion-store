import React, { useMemo } from 'react';
import { Box } from '..';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface RatingStarsProps {
  rating: number;
}

export const RatingStars = ({ rating }: RatingStarsProps) => {
  const ratingArray = useMemo(
    () => new Array(5).fill(0).fill(1, 0, rating),
    [rating]
  );

  return (
    <Box>
      {ratingArray.map((item, i) =>
        item === 1 ? (
          <AiFillStar color='#ffa534' size={12} key={i} />
        ) : (
          <AiOutlineStar color='#ffa534' size={12} key={i} />
        )
      )}
    </Box>
  );
};
