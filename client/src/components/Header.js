import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
};

function AuthBtn ({isAuth, classes}) {
  if (isAuth) {
    return(
      <Button color="inherit">
          <Link href='/api/logout' className={classes.link}>LOGOUT</Link>
      </Button>
    )
  } else {
    return (
      <Button color="inherit">
          <Link href='/auth/google' className={classes.link}>LOGIN</Link>
      </Button>
    )
  }
}

export class Header extends React.PureComponent {
    render() {
        const {classes, isAuth} = this.props;
        return (
            <header className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                          <Link href={isAuth ? '/surveys' : '/'} color='inherit'>
                            <HomeIcon />
                          </Link>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Emaily
                        </Typography>
                        <AuthBtn isAuth={isAuth} classes={classes}/>
                    </Toolbar>
                </AppBar>
            </header>
        );
    };
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    isAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default withStyles(styles)(Header);
