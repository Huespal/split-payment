const breakpoints = ['37.5rem', '72rem', '100rem'];

const size = {
  mobileMin: '0',
  mobileMax: breakpoints[0],
  tabletMin: breakpoints[0],
  tabletMax: breakpoints[1],
  desktopMin: breakpoints[1]
};

const screens = {
  screenS: `only screen and (min-width: ${size.mobileMin})
		and (max-width: ${size.mobileMax})`,
  screenM: `only screen and (min-width: ${size.tabletMin})
		and (max-width: ${size.tabletMax})`,
  screenL: `only screen and (min-width: ${size.desktopMin})`
};

export default screens;
