import React from 'react';
import Card from '@mui/material/Card';
import { useStyles } from './AddUserCard.s';
import { useState } from 'react';
import picForForm from './influencer.png';
import { addUser } from '../../DAL/server-requests/usersDAL.js'

const AddUserCard = () => {
    const classes = useStyles();

    const initialFormData= {
        fullName: '',
        userId: '',
        phoneNumber: '',
        ipAddress: '',
        Email: '',
      };

    const [formData, setFormData] = useState(initialFormData);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.fullName && formData.userId && formData.phoneNumber && formData.ipAddress) {
          addUser(formData.fullName, formData.userId, formData.phoneNumber, formData.ipAddress)
          alert('User Added:', formData);
          setFormData(initialFormData);
        } else {
          console.log('Please fill all fields');
        }
      };

    return (<Card sx={{
        background:'transparent',
        height: 'inherit',
        width: 'inherit',
        border: '1px solid black',
    }}>
    <form onSubmit={handleSubmit} className={classes.formStyle}>
        <div className={classes.headerContainer}>Add new User</div>
        <label className={classes.lableBlock}>
            <div>Full Name:</div>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </label>
        <label className={classes.lableBlock}>
            <div>User ID:</div>
            <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
        </label>
        <label className={classes.lableBlock}>
            <div>Phone Number:</div>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <label className={classes.lableBlock}>
            <div>IP Address:</div>
            <input type="text" name="ipAddress" value={formData.ipAddress} onChange={handleChange} />
        </label >
        <label className={classes.lableBlock}>
            <div>Email:</div>
            <input type="text" name="Email" value={formData.ipAddress} onChange={handleChange} />
        </label >
            <div>
                <input type="submit" value="Submit" disabled={!formData.fullName || !formData.userId || !formData.phoneNumber || !formData.ipAddress}/>
            </div>
            <img src={picForForm} alt="influencerImg" style={{height:'30%', width: '35%'}}></img>
    </form>
    </Card>);
}
export default AddUserCard;