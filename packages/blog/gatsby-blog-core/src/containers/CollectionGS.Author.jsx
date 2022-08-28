import React from 'react';
import { Layout, Stack, Main } from '@layout';
import PageTitle from '@components/PageTitle';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import AuthorGSExpanded from '@widgets/AuthorGSExpanded';
import PostsList from '../../../../../site/src/components/Posts';

const PageCollectionAuthors = ({
                                 data: {posts, collectionInfo},
                                 ...props
                               }) => {

  return (
    <Layout {...props}>
      <Seo title={collectionInfo.name} description={collectionInfo.description}/>
      <Divider/>
      <Stack effectProps={{effect: 'fadeInDown'}}>
        <PageTitle header="Published by Author" totalCount={posts.totalCount}/>
      </Stack>
      <Divider/>
      <Stack>
        <Main>
          <AuthorGSExpanded author={collectionInfo}/>
          <Divider/>
          {posts.nodes && <PostsList {...posts} />}
        </Main>
      </Stack>
      <Divider/>
    </Layout>
  );
};


export default PageCollectionAuthors;
