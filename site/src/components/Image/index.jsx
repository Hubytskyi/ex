import React from 'react';
import { Box } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';

const Image = ({icon, width = '100%', height = '100%', objectFit = 'contain', borderRadius = 0}) => {
  const iconName = icon?.substring(0, icon.indexOf('.')) || '';
  const data = useImageQuery();

  return (
    <Box sx={{width, height, borderRadius, overflow: 'hidden'}}>
      {data.allFile.edges.map(({node}, i) => {
        if (iconName === node.name) {
          return <img style={{objectFit}} width={'100%'} height={'100%'} key={i}
                      src={node.publicURL} alt=""/>;
        }
      })}
    </Box>
  );
};

export default Image;

export const useImageQuery = () => (
  useStaticQuery(graphql`
    query ImageQuery {
      allFile(
        filter: {extension: {regex: "/(svg|jpg)/"}, absolutePath: {regex: "/content/assets/images/"}}
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
);
