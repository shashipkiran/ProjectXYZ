import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { NavBar } from '../components';


import api from '../api';

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

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.warning.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function mapStateToProps(state) {
    const { orgStates } = state;
    const { orgid, content } = orgStates;
    return{
        orgid:orgid,
        content:content,
    }
}

const rows = [
    createData('Support Lite', 70, 'Hourly'),
    createData('Support Pro', 140, 'Hourly'),
];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

class services extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount = async () => {
        console.log("Mount Services");
        /*await api.createCust(payload).then(res => {
            let content = res.data.id + '-' + res.data.status;
            console.log(res);
            this.props.OrgRecAction(this.props.match.params.id,content);
        });*/
    }

    handleChange=()=>{

    }

    render(props) {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <NavBar />
                <main className={classes.layout}>
                    <div className={classes.toolbar} />
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Product</StyledTableCell>
                                    <StyledTableCell align="right">Price</StyledTableCell>
                                    <StyledTableCell align="right">Unit</StyledTableCell>
                                    <StyledTableCell align="right">Add</StyledTableCell>
                                    <StyledTableCell align="Center">Start Date</StyledTableCell>
                                    <StyledTableCell align="Center">End Date</StyledTableCell>
                                    <StyledTableCell align="left">Discount</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <GreenCheckbox  onChange={this.handleChange} name="Add" />
                                    </StyledTableCell>
                                    <StyledTableCell align="Center">
                                    <TextField
                                        id="stdate"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    </StyledTableCell>
                                    <StyledTableCell align="Center">
                                    <TextField
                                        id="endate"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button variant="contained"  color="primary">Save</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(services));