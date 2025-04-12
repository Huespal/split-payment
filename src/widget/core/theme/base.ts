const infoColor = {
  300: '#F0F6FF',
  500: '#295FCC',
  700: '#14267A',
  alpha: {
    100: 'rgba(55, 82, 254, 0.08)',
    200: 'rgba(55, 82, 254, 0.16)',
    500: 'rgba(55, 82, 254, 0.32)'
  }
};

const colors = {
  theme: { ...infoColor },
  neutral: {
    100: '#FFFFFF',
    200: '#F7F7F8',
    300: '#E8EAED',
    500: '#C6CAD2',
    700: '#717784',
    800: '#2A303D',
    900: '#05070A',
    alpha: {
      100: 'rgba(47, 56, 76, 0.08)',
      200: 'rgba(47, 56, 76, 0.16)',
      500: 'rgba(14, 18, 27, 0.32)'
    }
  },
  semantic: {
    info: infoColor,
    success: {
      300: '#F0FFF0',
      500: '#31AD42',
      700: '#006618',
      alpha: {
        100: 'rgba(49, 173, 66, 0.08)',
        200: 'rgba(49, 173, 66, 0.16)',
        500: 'rgba(49, 173, 66, 0.32)'
      }
    },
    warning: {
      300: '#FEFAEF',
      500: '#FEC737',
      700: '#7A5800',
      alpha: {
        100: 'rgba(254, 198, 55, 0.08)',
        200: 'rgba(254, 198, 55, 0.16)',
        500: 'rgba(254, 198, 55, 0.32)'
      }
    },
    error: {
      300: '#FEE6E0',
      500: '#FE6137',
      700: '#A32807',
      alpha: {
        100: 'rgba(254, 98, 55, 0.08)',
        200: 'rgba(254, 98, 55, 0.16)',
        500: 'rgba(254, 98, 55, 0.32)'
      }
    }
  }
} as const;

const elevationShadows = {
  elevationLow: `
		0px 12px 8px -2px ${colors.neutral.alpha[100]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  elevationMedium: `
		0px 16px 18px -4px ${colors.neutral.alpha[200]},
		0px 12px 8px -2px ${colors.neutral.alpha[100]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  elevationTop: `
		0px 16px 18px -4px ${colors.neutral.alpha[200]},
		0px 12px 8px ${colors.neutral.alpha[100]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  elevationRight: `
		-16px 0px 18px -4px ${colors.neutral.alpha[200]},
		-12px 0px 8px -2px ${colors.neutral.alpha[100]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  elevationBottom: `
		0px -16px 18px -4px ${colors.neutral.alpha[200]},
		0px -12px 8px -2px ${colors.neutral.alpha[100]},
		0px -3px 8px 0px ${colors.neutral.alpha[100]}`,
  elevationLeft: `
		16px 0px 18px -4px ${colors.neutral.alpha[200]},
		12px 0px 8px -2px ${colors.neutral.alpha[100]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`
};

const insetShadows = {
  insetTopAlpha: `inset 0px 2px 0px 0px ${colors.neutral.alpha[200]}`,
  insetTopAlphaLight: `inset 0px 2px 0px 0px ${colors.neutral.alpha[100]}`,
  insetAlpha: `
		inset 0px 2px 0px 0px ${colors.neutral.alpha[200]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  insetBottomBig: `inset 0px -4px 0px 0px ${colors.neutral[300]}`,
  insetBottomThemeBig: `inset 0px -4px 0px 0px ${colors.theme[500]}`,
  insetLeftBig: `inset 4px 0px 0px 0px ${colors.neutral[300]}`,
  insetLeftThemeBig: `inset 0px 4px 0px 0px ${colors.theme[500]}`
};

const shadows = {
  ...elevationShadows,
  ...insetShadows,
  s: `0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  m: `0px 2px 0px 0px ${colors.neutral[300]}`,
  sm: `
		0px 2px 0px 0px ${colors.neutral[300]},
		0px 3px 8px 0px ${colors.neutral.alpha[100]}`,
  negativesm: `
		0px -2px 0px 0px ${colors.neutral[300]},
		0px -3px 8px 0px ${colors.neutral.alpha[100]}`,
  focusAlpha: `0 0 0 4px ${colors.semantic.info.alpha[500]}`
};

const theme = {
  name: 'Base',

  sizes: {
    /** 4px */
    xs: '0.25rem',
    /** 8px */
    s: '0.5rem',
    /** 16px */
    default: '1rem',
    /** 24px */
    m: '1.5rem',
    /** 32px */
    l: '2rem',
    /** 40px */
    xl: '2.5rem',
    /** 48px */
    xxl: '3rem'
  },

  space: {
    0: '0',
    auto: 'auto',
    /** 4px */
    xxs: '0.25rem',
    /** 8px */
    xs: '0.5rem',
    /** 14px */
    s: '0.875rem',
    /** 16px */
    default: '1rem',
    /** 24px */
    m: '1.5rem',
    /** 32px */
    l: '2rem',
    /** 40px */
    xl: '2.5rem'
  },

  borders: {
    transparent: '2px solid transparent',
    neutral: {
      300: `2px solid ${colors.neutral[300]}`,
      500: `2px solid ${colors.neutral[500]}`,
      700: `2px solid ${colors.neutral[700]}`,
      900: `2px solid ${colors.neutral[900]}`,
      thin: {
        300: `1px solid ${colors.neutral[300]}`
      }
    },
    theme: {
      500: `2px solid ${colors.theme[500]}`
    },
    semantic: {
      error: {
        500: `2px solid ${colors.semantic.error[500]}`
      }
    }
  },

  radii: {
    /** 6px */
    default: '0.375rem',
    m: '50%',
    l: '100%',
    /** 40px */
    xl: '2.5rem',
    /** 48px */
    xxl: '3rem'
  },

  shadows,

  colors,

  fontSizes: {
    /** 10px */
    xxs: '0.625rem',
    /** 12px */
    xs: '0.75rem',
    /** 14px */
    s: '0.875rem',
    /** 16px */
    default: '1rem',
    /** 18px */
    m: '1.125rem',
    /** 20px */
    xm: '1.25rem',
    /** 24px */
    l: '1.5rem',
    /** 32px */
    xl: '2rem'
  },

  lineHeights: {
    default: 1.5,
    title: 1.1,
    button: 1
  },

  letterSpacings: {
    positive: {
      default: '0.125ex'
    },
    negative: {
      default: '-0.025ex'
    }
  },

  mediaQueries: {
    mobile: '@media only screen and (max-width: 45rem})',
    tablet: '@media only screen and (min-width: 45rem) and (max-width: 77rem)',
    desktop: '@media only screen and (min-width: 77rem)'
  },

  fonts: {
    default: 'Manrope, system-ui, sans-serif'
  },

  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },

  transitions: {
    all: 'all 400ms cubic-bezier(0.17, 0.67, 0.6, 0.96)',
  },

  zIndices: {
    hidden: -1,
    default: 0,
    s: 1,
    m: 2
  }
} as const;

export type BaseTheme = typeof theme;

export default theme;
