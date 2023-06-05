import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import palette from './palette';
import components from './components';

const theme = createTheme(deepmerge(palette, components));

export default theme;
