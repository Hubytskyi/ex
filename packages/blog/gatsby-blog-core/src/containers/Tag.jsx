import React from 'react';
import {Layout, Stack, Main} from '@layout';
import PageTitle from '@components/PageTitle';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import PostsList from '../../../../../site/src/components/Posts';

const Tag = (props) => {
    const {slug} = props.pageContext
    return (
        <Layout {...props}>
            <Seo title={slug} description={''}/>
            <Divider/>
            <Stack effectProps={{effect: 'fadeInDown'}}>
                <PageTitle
                    header={slug}
                    subheader={''}
                    running={''}
                    totalCount={props.data?.posts?.nodes?.length || 0}
                />
            </Stack>
            <Divider/>
            <Stack>
                <Main>
                    <div>
                        {props.data?.posts?.nodes && <PostsList {...props.data.posts} />}
                    </div>
                </Main>
            </Stack>
            <Divider/>
        </Layout>
    );
};

export default Tag;
