import React, {useMemo, useState, useEffect} from 'react';
import {Box, Stack} from '@mui/material';
import PostItem from './Item';
import styles from './index.styles';
import PostsFilter from './Filter';
import Locations from './Locations';

const PostsList = ({nodes}) => {

    const defaultZip = '10001';
    const defaultCity = 'New York';
    const defaultCountry = 'US';
    const defaultState = 'NY';

    const [filters, setFilters] = useState({
        city: defaultCity,
        state: defaultState,
        country: defaultCountry,
    });

    const [zipValue, setZipValue] = useState(defaultZip);

    const handleChange = (value, category) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const parseStringToArray = (list) => {
        return list?.split(',').map(element => element.trim()) || [];
    }

    const filteredPosts = useMemo(() => {
        return nodes.filter((node) => {
            const itemCountry = node.country || '';
            const itemCities = parseStringToArray(node.cities)
            const itemStates = parseStringToArray(node.states)
            const itemFilters = parseStringToArray(node.filters)
            const items = [...itemCities, ...itemStates, ...itemFilters, itemCountry];
            if (Object.values(filters).every(el => items.indexOf(el) !== -1)) {
                return node;
            } else if (filters.country === defaultCountry && itemCountry === defaultCountry) {
                return node
            }
        });
    }, [nodes, filters, zipValue]);

    const refreshFilter = () => {
        setFilters({city: defaultCity, state: defaultState, country: defaultCountry});
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
