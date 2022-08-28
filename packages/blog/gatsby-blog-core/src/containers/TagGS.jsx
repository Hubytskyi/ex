import React from 'react';
import { Layout, Stack, Main } from '@layout';
import PageTitle from '@components/PageTitle';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import PostsList from '../../../../../site/src/components/Posts';

const TagGS = ({data: {posts, collectionInfo}, ...props}) => {
  return (
    <Layout {...props}>
      <Seo title={collectionInfo.name} description={''}/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <PageTitle
          header={collectionInfo.name}
          subheader={collectionInfo.title}
          running={''}
          totalCount={posts.totalCount}
        />
      </Stack>
      <Divider/>
      <Stack>
        <Main>
          <div>
            {posts.nodes && <PostsList {...posts} />}
          </div>
        </Main>
      </Stack>
      <Divider/>
    </Layout>
  );
};


export default TagGS;
