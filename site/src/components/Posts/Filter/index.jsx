import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import newFilters from '../../../data/filters';

const PostsFilter = ({filters, handleChange, refreshFilter}) => {
  return (
    <Box sx={{pr: 2}}>
      {newFilters && newFilters.map((filter) => (
          <Box sx={{marginBottom: 2}} key={filter.name}>
            <Typography sx={{mb: 1}}>{filter.name}</Typography>
            {filter.categories && filter.categories.map((category) => (
                <Box key={category.name}>
                  <FormControl fullWidth key={category.name}>
                    <InputLabel id="corporate-insurance-categories-label">{category.name}</InputLabel>
                    <Select
                        key={category.name}
                        labelId="corporate-insurance-categories-label"
                        id={category.name}
                        value={filters[category.name] || ''}
                        label={category.name}
                        sx={{mb: 2}}
                        onChange={(event) => {
                          handleChange(event.target.value, category.name);
                        }}
                    >
                      {category.types.map((type) => {
                        return (
                            <MenuItem key={type.slug} value={type.slug}>{type.name}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
            ))}
          </Box>
      ))}
      <Typography sx={{cursor: 'pointer', alignSelf: 'end'}} onClick={refreshFilter} variant={'caption'}>Clear All</Typography>
    </Box>
  );
};

export default PostsFilter;