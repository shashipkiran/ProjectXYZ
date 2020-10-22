import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ChatBar } from '../components';

const drawerWidth = 240;

const useStyles = theme => ({
    layout: {
        width: 'auto',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
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

class mucom extends React.Component {
    constructor(props){
        super(props);
    }

    saveCustomer = async () =>{
        if(this.props.match.params.id!=null){
            console.log(this.props.match.params.id);
            //this.props.history.push('/schat/' + this.props.match.params.id);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ChatBar />
                <main className={classes.layout}>
                <div className={classes.toolbar} />
                    <Paper className={classes.paper}>
                        <React.Fragment>
                        <Grid container spacing={3}>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="Name"
                                    name="Name"
                                    label="Name"
                                    fullWidth
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Primary Email"
                                    fullWidth
                                    autoComplete="email"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    id="issue"
                                    name="issue"
                                    label="Issue Description"
                                    multiline
                                    rows={2}
                                    fullWidth
                                    inputProps={{ maxLength: 120}}
                                />
                                </Grid>
                                <Grid item xs={12}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Button variant="contained"  color="primary" onClick={() => this.saveCustomer()}>Submit to Chat</Button>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    </Paper>
                </main>
            </div>
        )
    }
}

export default withStyles(useStyles)(mucom);