import React from 'react';
import {Layout, Stack, Main} from '@layout';
import PageTitle from '@components/PageTitle';
import Divider from '@components/Divider';
import Seo from '@widgets/Seo';
import PostsList from '../../../../../site/src/components/Posts';


const Category = (props) => {
    const {name, description} = props.pageContext
    return (
        <Layout {...props}>
            <Seo title={name} description={description}/>
            <Divider/>
            <Stack effectProps={{effect: 'fadeInDown'}}>
                <PageTitle
                    header={name}
                    subheader={''}
                    running={description}
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

export default Category;
