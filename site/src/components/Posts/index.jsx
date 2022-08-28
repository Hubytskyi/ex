import React, {useMemo, useState, useEffect} from 'react';
import {Box, Stack} from '@mui/material';
import PostItem from './Item';
import styles from './index.styles';
import PostsFilter from './Filter';
import Locations from './Locations';

const PostsList = ({nodes}) => {

    const defaultZip = '10001';
    const defaultCity = 'New York';

    const [filters, setFilters] = useState({
        cities: defaultCity
    });

    const [zipValue, setZipValue] = useState(defaultZip);

    const handleChange = (value, category) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const filteredPosts = useMemo(() => {
        return nodes.filter((node) => {
            const itemCities = node.cities?.split(',').map(element => element.trim()) || [];
            const itemFilters = node.filters.split(',').map(element => element.trim());
            const items = [...itemCities, ...itemFilters];
            if (Object.values(filters).every(el => items.indexOf(el) !== -1)) {
                return node;
            }
        });
    }, [nodes, filters, zipValue]);

    const refreshFilter = () => {
        setFilters({cities: defaultCity});
        setZipValue(defaultZip);
        localStorage.removeItem('zip');
    };

    useEffect(() => {
        const zip = localStorage.getItem('zip')
        if (zip) {
            setZipValue(zip)
        }
    }, [])

    return (
        <Box sx={styles.wrapper}>
            <Box sx={styles.filter}>
                <Locations handleChange={handleChange} setZipValue={setZipValue} zipValue={zipValue}
                           defaultZip={defaultZip}/>
                <PostsFilter filters={filters} handleChange={handleChange}
                             refreshFilter={refreshFilter}/>
            </Box>
            <Stack direction="row" flexWrap="wrap" width="100%" height="max-content">
                {filteredPosts.length > 0
                    ? filteredPosts.map((item) => (
                        <PostItem {...item} key={item.slug}/>
                    ))
                    : <Box>Posts not found</Box>}
            </Stack>
        </Box>
    );
};

export default PostsList;
