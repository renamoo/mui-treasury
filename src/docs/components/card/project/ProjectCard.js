import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrandCardHeader } from '@mui-treasury/components/cardHeader';
import { TextInfoCardContent } from '@mui-treasury/components/cardContent';
import { useTextCardContent03Styles } from '@mui-treasury/styles/cardContent';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow';
import MOCK from 'constants/mock';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
}));

const ProjectCard = () => {
  const styles = useTextCardContent03Styles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader image={MOCK.reactLogo} extra={'7 minutes'} />
      <CardContent className={cardStyles.content}>
        <TextInfoCardContent
          classes={styles}
          overline={'FACEBOOK INC.'}
          heading={'React'}
          body={
            'A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.'
          }
        />
      </CardContent>
    </Card>
  );
};

// hide-start
ProjectCard.metadata = {
  title: 'Project',
  path: 'card/project',
  files: [
    { pkg: 'mui-styles', path: 'shadow/lightTop/lightTopShadow.styles.js' },
    { pkg: 'mui-components', path: 'cardHeader/brand/BrandCardHeader.js' },
    { pkg: 'mui-styles', path: 'cardHeader/brand/brandCardHeader.styles.js' },
    {
      pkg: 'mui-components',
      path: 'cardContent/textInfo/TextInfoCardContent.js',
    },
    {
      pkg: 'mui-styles',
      path: 'cardContent/text03/textCardContent03.styles.js',
    },
  ],
};
// hide-end

export default ProjectCard;
