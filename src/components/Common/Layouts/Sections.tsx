import React, { PropsWithChildren } from 'react';
import { Box } from '..';

export const SectionP1: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box py={{ xs: 3, sm: 5 }} px={{ xs: 2, sm: 4, md: 6 }} as='section'>
      {children}
    </Box>
  );
};

export const SectionP2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box px={{ xs: 2, sm: 4, md: 6 }} as='section'>
      {children}
    </Box>
  );
};
