import React from 'react';
import { Link as GLink } from 'gatsby'
import { Link, Text } from 'theme-ui'
import TextList from '@components/TextList';
import PageTitle from '@components/PageTitle';

const styles = {
  item: {
    display: `inline-block`
  }
};

export const PostGSHead = ({title, category, categoryGS}) => {

  const info = (
    <TextList>
      {category && (
        <Text sx={styles.item}>
          {`Published in `}
          <Link variant='mute' as={GLink} to={`/${category}`}>
            <strong>{categoryGS.name}</strong>
          </Link>
        </Text>
      )}
    </TextList>
  );

  return <PageTitle header={title} running={info}/>;
};
