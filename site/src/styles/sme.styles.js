import theme from './theme/theme.const';
import bgImage from '../assets/images/home-page.svg';

const styles = {
  section: {
    backgroundColor: theme.palette.grey["200"],
    display: 'flex',
    padding: {
      xs: '140px 0',
      md: '140px 32px 64px',
      lg: '140px 64px 64px',
    },
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'top -75px right -180px',
    backgroundRepeat: 'no-repeat',
  },

  titleWrapper: {
    marginBottom: 8,
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: '1.5rem',
  }
}

export default styles;