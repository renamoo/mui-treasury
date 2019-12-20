import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import RestaurantMenuRounded from '@material-ui/icons/RestaurantMenuRounded';
import TripOrigin from '@material-ui/icons/TripOrigin';
import { makeStyles } from '@material-ui/styles';
import cx from 'clsx';
import React from 'react';
const mainColor = '#FFFFFF';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  card: {
    width: '180px',
    height: '230px',
    margin: '20px 0 0 0',
    display: 'flex',
    background: mainColor,
    position: 'relative',
    overflow: 'visible',
    '&::before': {
      content: "' '",
      width: '100%',
      'border-bottom': `30px solid ${mainColor}`,
      'border-left': ' 20px solid transparent',
      'border-right': '20px solid transparent',
      position: 'absolute',
      top: '-30px',
    },
  },
  hole: {
    position: 'absolute',
    top: '-20px',
    margin: 'auto',
    width: '100%',
    left: 0,
  },
}));

const TagCard = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card} elevation={0}>
      <div className={cx(styles.left, styles.moveLeft)}></div>
      <CardContent>
        <TripOrigin className={styles.hole} />
        <RestaurantMenuRounded
          fontSize="inherit"
          style={{ fontSize: '83px', margin: 'auto', width: '100%' }}
        ></RestaurantMenuRounded>
        <Typography align="center" gutterBottom>
          BreakFast
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align="center"
          component="p"
        >
          eggs benedict <br />
          BLT sandwich <br />
          french omelette
        </Typography>
      </CardContent>
    </Card>
  );
};

// TagCard.propTypes = {};
// TagCard.defaultProps = {};

TagCard.metadata = {
  title: 'Tag', // name that appear in web
  path: 'card/tag', // reference to markdown file
  files: [],
  relates: [],
  frameProps: {
    bgcolor: '#e9e9e9',
  },
};

export default TagCard;
