import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavBar } from '../components';

const useStyles = theme => ({
    layout: {
        width: 'auto',
        marginTop: theme.spacing(3),
        marginLeft: 100,
        marginRight: theme.spacing(3),
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
});


class invoices extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <NavBar />
                <main className={classes.layout}>
                    <div className={classes.toolbar} />
                    <div>This is where you see the invoices</div>
                </main>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(invoices);