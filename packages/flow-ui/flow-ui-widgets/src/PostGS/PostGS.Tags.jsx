import React from 'react';
import { Link } from 'gatsby';
import { Badge, Heading, Flex, Box } from 'theme-ui';

const styles = {
  wrapper: {
    alignItems: `center`
  },
  heading: {
    color: `omegaDark`,
    mr: 3,
    mb: 0
  }
};

export const PostGSTags = ({tags}) => {
  return (
    <>
      {tags && tags.length > 0 ? (
        <Flex sx={styles.wrapper}>
          <Heading variant="h5" sx={styles.heading}>
            Tags
          </Heading>
          <Box variant="lists.badges">
            {tags.map((tag, index) => (
              <Badge variant="tag" key={index} as={Link} to={`/${tag}`}>
                #{tag}
              </Badge>
            ))}
          </Box>
        </Flex>
      ) : null}
    </>
  );
};
