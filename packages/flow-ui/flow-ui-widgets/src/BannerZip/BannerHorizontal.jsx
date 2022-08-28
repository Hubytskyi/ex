import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Button, Heading, Input } from 'theme-ui';

const styles = {
  wrapper: {
    alignItems: `center`,
    flexDirection: [`column`, `row`],
    bg: `omegaDarker`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `70% bottom`,
    borderRadius: `default`,
    width: `full`,
    p: 4
  },
  left: {
    flexBasis: `2/3`
  },
  right: {
    flexBasis: `1/3`,
    textAlign: `right`
  },
  heading: {
    color: `betaLight`,
    fontWeight: `normal`
  },
  subheading: {
    color: `omega`,
    mb: [3, 0]
  }
};

const BannerZip = () => {

  const [zipValue, setZipValue] = useState('');

  const zipChange = (event) => {
    setZipValue(event.target.value)
  };

  const zipHandler = () => {
    if (!zipValue.length) {
      localStorage.removeItem('zip');
    }

    if (zipValue.length >= 3 && zipValue.length <= 5) {
      localStorage.setItem('zip', zipValue);
    }
  }

  return (
    <Flex sx={styles.wrapper}>
      <Box sx={styles.left}>
        <Heading variant="h3" sx={styles.heading}>
          Zip Code
        </Heading>
        <Input id="zip" name="zip" label="Zip" onChange={zipChange}/>
      </Box>
      <Box sx={styles.right}>
        <Button as={Link} to="/category1" variant="primary" aria-label="Download Report" onClick={zipHandler}>
          Get Free Proposals
        </Button>
      </Box>
    </Flex>
  );
};

export default BannerZip;
