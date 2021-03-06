import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { useSimpleArrowStyles } from '@mui-treasury/styles/arrow';
import { usePushingGutter } from '@mui-treasury/styles/gutter';

const SimpleArrow = () => {
  const classes = useSimpleArrowStyles();
  const gutterStyles = usePushingGutter({ firstExcluded: true, space: 2 });
  return (
    <Box className={gutterStyles.parent}>
      <Button classes={classes}>
        <KeyboardArrowLeft />
      </Button>
      <Button classes={classes}>
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

SimpleArrow.propTypes = {};
SimpleArrow.defaultProps = {};

// hide-start
SimpleArrow.metadata = {
  title: 'Simple',
  path: 'arrow/simple',
  files: [
    {
      pkg: 'mui-styles',
      path: 'arrow/simple/simpleArrow.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default SimpleArrow;
