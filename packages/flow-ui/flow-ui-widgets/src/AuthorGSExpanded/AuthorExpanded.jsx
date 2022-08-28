import React from 'react'
import { Link as GLink } from 'gatsby'
import { Flex, Box, Text, Heading, Card, Badge, Link } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import attachSocialIcons from '@helpers/attachSocialIcons'
import SocialMediaGS from '@components/SocialMediaGS';
import Image from '../../../../../site/src/components/Image/index';

const styles = {
  card: {
    position: `relative`
  },
  wrapper: {
    flexDirection: [`column`, `row`],
    position: `relative`,
    zIndex: 3
  },
  avatarColumn: {
    flexBasis: `1/3`
  },
  infoColumn: {
    flexBasis: `2/3`
  },
  innerBox: {
    flexBasis: `1/2`,
    flexGrow: 1,
    px: [0, 3],
    mt: [3, 0]
  },
  subheader: {
    color: `omegaDark`
  },
  name: {
    textAlign: [`center`, `left`],
    mt: [3, 0],
    px: 3
  },
  bio: {
    textAlign: [`center`, `left`]
  },
  socialList: {
    a: {
      m: 0
    }
  },
  link: {
    position: `absolute`,
    top: 10,
    right: 10,
    zIndex: 3
  },
  pattern: {
    borderRadius: `lg`
  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  gradient: {
    size: `full`,
    borderRadius: `lg`,
    position: `absolute`,
    left: 0,
    top: 0,
    zIndex: 2,
    background: [
      t =>
        `linear-gradient(0deg, ${t.colors.contentBg} 20%, rgba(255, 255, 255, 0) 80%)`,
      t =>
        `linear-gradient(270deg, ${t.colors.contentBg} 20%, rgba(255, 255, 255, 0) 100%)`
    ]
  }
}

const Subheader = ({ children }) => (
  <Heading variant='h4' sx={styles.subheader}>
    {children}
  </Heading>
)

const AuthorAvatar = ({ name, photo, slug }) => {
  return (
    photo ? (
      <Box sx={styles.imgWrapper}>
        <Link as={GLink} to={`/${slug}`} aria-label={name}>
          <Image icon={photo} width={'150px'} height={'150px'} objectFit={'cover'} borderRadius={'100%'}/>
        </Link>
      </Box>
    ) : null
  )
}


const AuthorName = ({ name, slug }) => (
  <Box sx={styles.name}>
    <Heading variant='h3'>
      <Link as={GLink} to={`/${slug}`}>
        {name}
      </Link>
    </Heading>
  </Box>
)

const AuthorBio = ({ position, description }) => (
  <Box sx={styles.bio}>
    <Subheader>{position}</Subheader>
    <Text>{description}</Text>
  </Box>
)

const AuthorSkills = ({ expertise }) => {
  const skills = expertise.split(',').map(skill => skill.trim())
  return (
    skills ? (
      <Box sx={styles.innerBox}>
        <Subheader>Expertise</Subheader>
        {skills.map(skill => (
          <Text key={`skill-${skill}`}>{skill}</Text>
        ))}
      </Box>
    ) : null
  )
}

const AuthorSocialMedia = ({ website, instagram, twitter }) => {
  const social = [instagram, twitter, website]
  return website || instagram || twitter ? (
    <Box sx={styles.innerBox}>
      <Subheader>Social Media</Subheader>
      <SocialMediaGS
        variant='vertical'
        items={attachSocialIcons(social)}
        wrapperStyle={styles.socialList}
      />
    </Box>
  ) : null
}


const AuthorGSExpanded = ({ author, withLink }) => {
  if (!author) return null

  const { expertise, website, instagram, twitter } = author

  return (
    <Card variant='paper' sx={styles.card}>
      <Flex sx={styles.wrapper}>
        <Box sx={styles.avatarColumn}>
          <AuthorAvatar {...author} />
        </Box>
        <Box sx={styles.infoColumn}>
          <AuthorName {...author} />
          <Flex sx={styles.wrapper}>
            <Box sx={styles.innerBox}>
              <AuthorBio {...author} />
            </Box>
            {(expertise || website || instagram || twitter) && (
              <Box sx={styles.innerBox}>
                <Flex>
                  <AuthorSkills {...author} />
                  <AuthorSocialMedia {...author} />
                </Flex>
              </Box>
            )}
          </Flex>
        </Box>
      </Flex>
      {withLink && (
        <Badge variant='tag' as={GLink} to={author.slug} sx={styles.link}>
          View Posts
        </Badge>
      )}
      <Box sx={styles.gradient} />
      <MemphisPattern sx={styles.pattern} />
    </Card>
  )
}

export default AuthorGSExpanded
