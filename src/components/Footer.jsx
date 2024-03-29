import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Footer({ onPageChange }) {

  function handlePageChange(event, page) {
    onPageChange(page);
  }

  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange} />
    </Stack>
  );
}
