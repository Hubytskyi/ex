import React from 'react';
import { Box } from 'theme-ui';

export const PostGSBody = ({description}) => {
  return (
    <Box>
      <div
        dangerouslySetInnerHTML={{__html: description}}
      />
    </Box>
)
}
