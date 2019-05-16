import React from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
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

export class Header extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <header className={classes.root}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Emaily
                        </Typography>
                        <Button color="inherit">
                            <Link href='/auth/google' className={classes.link}>LOGIN</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </header>
        );
    };
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
