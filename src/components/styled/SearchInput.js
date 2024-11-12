import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = ({ value, onChange, onSearch, label, placeholder, required = false }) => {
  return (
    <TextField
      type="search"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearch}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
