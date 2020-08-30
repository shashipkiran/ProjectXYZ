const Customer = require('../models/cust-model');

createCust = (req,res) => {
    const body = req.body;
    //console.log(req.body);

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Missing customer data!',
        });
    }

    const cust_mer = new Customer(body);
    if (!cust_mer) { return res.status(400).json({ success: false, error: err }); }

    Customer.findOne({orgid: body.orgid}, (err, cust_av) => {
        if (err) { return res.status(400).json({ success: false, error: err }); }
        if (cust_av!=null) {
            console.log(cust_mer);
            return res.status(201).json({
                success: true,
                id: cust_av._id,
                status: cust_av.status,
                message: 'Customer Exists Already!',
            });
        }
        
        if(body.status==null){cust_mer.status="0";}
        if(body.status=='0'){cust_mer.status='1';}

        cust_mer
        .save()
        .then(() => {
            console.log(cust_mer.status);
            return res.status(201).json({
                success: true,
                id: cust_mer._id,
                status:cust_mer.status,
                message: 'Customer Created!',
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Customer not created!',
            });
        })

    }).catch(err => console.log(err))
};

updateCust = async (req,res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Missing customer details',
        })
    }

    console.log('Update:' + req.params.id);

    Customer.findOne({ orgid: req.params.id }, (err, cust_mer) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }

        //console.log(cust_mer);

        cust_mer.name = body.name;
        cust_mer.contact = body.contact;
        cust_mer.email = body.email;
        cust_mer.phone = body.phone;
        cust_mer.addr1 = body.addr1;
        cust_mer.addr2 = body.addr2;
        cust_mer.city = body.city;
        cust_mer.state = body.state;
        cust_mer.country = body.country;
        cust_mer.zipcode = body.zipcode;
        cust_mer.instruct = body.instruct;
        if(body.status===0){cust_mer.status =1;}

        cust_mer
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: cust_mer._id,
                    status:cust_mer.status,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
        });
    });
};

getCustByOrgId = async (req,res) => {
    console.log(req.params);
    await Customer.findOne({orgid: req.params.id}, (err, cust_mer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!cust_mer) {
            return res
                .status(404)
                .json({ success: false, error: 'Customer not found' })
        }
        return res.status(200).json({ success: true, data: cust_mer })
    }).catch(err => console.log(err))
};

getCustAll = async (req,res) => {
    //console.log('All..');
    return res.status(201).json({
        success: true,
        message: 'customer all!',
    });
};

deactivateCust = async (req,res) => {
    //console.log('Deactivate..');
    return res.status(201).json({
        success: true,
        message: 'customer deactivated!',
    });
};

module.exports = {
    createCust,
    updateCust,
    getCustByOrgId,
    getCustAll,
    deactivateCust,
};


