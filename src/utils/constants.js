export const MAIN_FONT_COLOR = '#5C8FC6';

const size = {
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
};

export const device = {
  mobileM: `(max-width: 424px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 767px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1023px)`,
  laptop: `(min-width: ${size.laptop})`,
};
