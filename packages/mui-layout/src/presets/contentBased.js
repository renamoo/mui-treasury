import getDefaultScreenConfig from './getDefaultScreenConfig';

export default {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'sm',
  heightAdjustmentDisabled: false,
  xs: getDefaultScreenConfig({
    header: {
      position: 'relative',
      clipped: false,
    },
  }),
  sm: getDefaultScreenConfig({
    sidebar: {
      variant: 'persistent',
      collapsible: false,
    },
    header: {
      position: 'relative',
      clipped: false,
      persistentPushed: true,
      persistentScreenFit: false,
    },
    content: {
      persistentPushed: true,
      persistentScreenFit: false,
    },
    footer: {
      persistentPushed: true,
      persistentScreenFit: false,
    },
  }),
};
