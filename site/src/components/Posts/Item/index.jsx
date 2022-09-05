import React from 'react';
import { Link } from 'gatsby';
import Image from '../../Image';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  flexBasis: '46%',
  margin: '6px',
  borderRadius: '12px',
  boxShadow: '0 6px 16px #3469cb29',
  [theme.breakpoints.up('sm')]: {
    margin: '10px',
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '22%'
  }
}));

const PostItem = ({title, icon, slug}) => {
  return (
    <Item>
      <Link to={`/${slug}`} style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        padding: '16px 10px',
        color: '#2d3748',
        fontSize: '13px',
        height: '80px'
      }}>
        <Image icon={icon} width={'34px'} height={'34px'} />
        <Box sx={{
          textAlign: 'lfet',
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
        }} margin={1}>{title}</Box>
      </Link>
    </Item>
  );
};

export default PostItem;