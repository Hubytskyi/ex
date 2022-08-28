import React from 'react';
import { Link as GLink } from 'gatsby';
import { Box, Heading, Card, Link } from 'theme-ui';
import Section from '@components/Section';
import attachSocialIcons from '@helpers/attachSocialIcons';
import Image from '@elegantstack/gatsby-starter-flexiblog-agency/src/components/Image';
import SocialMediaGS from '@components/SocialMediaGS';

const styles = {
  wrapper: {
    textAlign: `center`
  },
  avatarWrapper: {
    mb: 4,
    display: 'flex',
    justifyContent: 'center',

  },
  title: {
    color: `omegaDark`
  }
};

const AuthorGSCompact = ({name, photo, position, instagram, twitter, website, slug, ...props}) => {

  if (!name) return '';
  const social = [instagram, twitter, website];

  return (
    <Section aside {...props}>
      <Card variant="paper">
        <Box sx={styles.wrapper}>
          {photo && (
            <Box sx={styles.avatarWrapper}>
              <Link as={GLink} to={`/${slug}`} aria-label={name}>
                <Image icon={photo} width={'150px'} height={'150px'} objectFit={'cover'} borderRadius={'100%'}/>
              </Link>
            </Box>
          )}
          <Link as={GLink} to={`/${slug}`}>
            <Heading variant="h3">{name}</Heading>
          </Link>
          <Heading variant="h4" sx={styles.title}>
            {position}
          </Heading>
          {social && (
            <SocialMediaGS
              variant="horizontal"
              items={attachSocialIcons(social)}
              iconOnly
            />
          )}
        </Box>
      </Card>
    </Section>
  );
};

export default AuthorGSCompact;

