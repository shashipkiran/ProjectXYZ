import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { OrgRecAction } from '../statemt/actions';
import { connect } from 'react-redux';
import api from '../api';

const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    layout: {
        width: 'auto',
        marginTop: theme.spacing(3),
        marginLeft: 100,
        marginRight: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    pos: {
        marginBottom: 12,
    },
});

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    OrgRecAction: (id,payload) => dispatch(OrgRecAction(id,payload))
});

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
        }
    }

    componentDidMount = async () => {
        console.log("Mount Home");
        const payload = { orgid:this.props.match.params.id };

        await api.createCust(payload).then(res => {
            let content = res.data.id + '-' + res.data.status;
            console.log(res);
            this.props.OrgRecAction(this.props.match.params.id,content);
        });
    }

    LinkBehavior = React.forwardRef((props, ref) => (
        <RouterLink ref={ref} to="/regis" {...props} />
    ));

    render(){
        const { classes } = this.props;

        return (
            <div>
                <main className={classes.layout}>
                    <div className={classes.toolbar}/>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2" align="center">
                                Lead your organization to success, signup and change the way you support your users.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <CardActions>
                            <Button color="primary" component={this.LinkBehavior}>
                                Signup
                            </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </main>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles)(Home));