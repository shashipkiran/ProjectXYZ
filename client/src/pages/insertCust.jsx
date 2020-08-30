import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';
import api from '../api';

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

function mapStateToProps(state) {
    //console.log(state);
    const { orgStates } = state;
    const { orgid, content } = orgStates;
    return{
        orgid:orgid,
        content:content,
    }
}


class insertCust extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            contact:"",
            email:"",
            phone:"",
            addr1:"",
            addr2:"",
            city:"",
            state:"",
            country:"",
            zipcode:"",
            instruct:"",
            status:0,
            open:false,
        }
    }

    componentDidMount = async () => {
        console.log("Mount InsertCustomer" + (this.props.orgid!==""));
        if(this.props.orgid!==""){
            await api.getCustByOrgId(this.props.orgid).then(res => {
                console.log(res.data.data);
                this.setState({
                    name:res.data.data.name,
                    contact:res.data.data.contact,
                    email:res.data.data.email,
                    phone:res.data.data.phone,
                    addr1:res.data.data.addr1,
                    addr2:res.data.data.addr2,
                    city:res.data.data.city,
                    state:res.data.data.state,
                    country:res.data.data.country,
                    zipcode:res.data.data.zipcode,
                    instruct:res.data.data.instruct,
                    status:res.data.data.status,
                });
            });
        }
    }

    handleChangeInput = async (key,e) => {
        this.setState({ [key]:e.target.value });
    }

    saveCustomer = async () =>{
        if(this.props.orgid!=null && this.props.content!=null){
            const payload = this.state;
            await api.updateCust(this.props.orgid,payload).then(res => {
                //console.log(res);
                this.setState({
                    status:res.data.status,
                    open:true,
                });
            });
        }
    }

    getSteps = () =>{
        return ['New', 'Pending', 'Active'];
    }

    render(props) {
        const { classes } = this.props;
        //const {name,contact,email,phone,addr1,addr2,city,state,country,zipcode,instruct,status} = this.state;
        const steps = this.getSteps();

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <div className={classes.toolbar} />
                    <Paper className={classes.paper}>
                        <Stepper activeStep={this.state.status || 0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            <Snackbar open={this.state.open} autoHideDuration={2000} message="Saved!"
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                onClose={() => this.setState({open: false})}
                                ContentProps={{
                                    'aria-describedby': 'message-id',
                                }}
                            >
                            </Snackbar>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="company"
                                    name="Company"
                                    label="Company"
                                    fullWidth
                                    autoComplete="company-name"
                                    value={this.state.name|| ''}
                                    onChange={(e) =>{this.handleChangeInput('name',e)}}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="cname"
                                    name="cname"
                                    label="Primary Contact"
                                    fullWidth
                                    autoComplete="given-name"
                                    value={this.state.contact || ''}
                                    onChange={(e) =>{this.handleChangeInput('contact',e)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Primary Email"
                                    fullWidth
                                    autoComplete="email"
                                    value={this.state.email || ''}
                                    onChange={(e) =>{this.handleChangeInput('email',e)}}
                                />
                                
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Primary Phone"
                                    fullWidth
                                    autoComplete="phone"
                                    value={this.state.phone || ''}
                                    onChange={(e) =>{this.handleChangeInput('phone',e)}}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    value={this.state.addr1 || ''}
                                    onChange={(e) =>{this.handleChangeInput('addr1',e)}}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    value={this.state.addr2 || ''}
                                    onChange={(e) =>{this.handleChangeInput('addr2',e)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    value={this.state.city || ''}
                                    onChange={(e) =>{this.handleChangeInput('city',e)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField id="state" name="state" label="State/Province/Region" fullWidth 
                                    value={this.state.state || ''}
                                    onChange={(e) =>{this.handleChangeInput('state',e)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    value={this.state.zipcode || ''}
                                    onChange={(e) =>{this.handleChangeInput('zipcode',e)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    value={this.state.country || ''}
                                    onChange={(e) =>{this.handleChangeInput('country',e)}}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    id="instruct"
                                    name="instruct"
                                    label="Instructions"
                                    fullWidth
                                    autoComplete="instruct"
                                    value={this.state.instruct || ''}
                                    onChange={(e) =>{this.handleChangeInput('instruct',e)}}
                                />
                                </Grid>
                                <Grid item xs={12}
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Button variant="contained"  color="primary" onClick={() => this.saveCustomer()}>Save</Button>
                                </Grid>
                            </Grid>
                            </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(insertCust));