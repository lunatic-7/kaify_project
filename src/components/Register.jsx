import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Avatar,
    Box,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SaveIcon from '@mui/icons-material/Save';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        rollNo: '',
        course: '',
        specification: '',
        gender: '',
        dob: '',
        bloodGroup: '',
        disability: '',
        languageKnown: '',
        medicalRecord: '',
        profileImage: null,
    });


    // Some Styling
    const buttonStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(45deg, #b97eff, #800080)',
        color: '#fff',
        textTransform: 'none',
    };

    const paperStyle = {
        // padding: '20px',
        borderRadius: '20px',
        backgroundColor: '#f2f2f2',
    };

    const leftBoxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '0px 20px 20px 0px',
        backgroundColor: "#fff",
        justifyContent: "space-around",
        width: "60%",
        marginRight: "2rem",
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            profileImage: file,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can implement your registration logic, e.g., API call to register the user.
        console.log(formData);
    };

    return (
        <Box width="100%" display="flex" justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
                <Paper elevation={3} style={paperStyle}>
                    <Box display="flex" justifyContent="space-between">
                        {/* Left section with logo, points, and logout */}
                        {/* <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" mb={3} width="60%" mr={5} borderRadius="10%" backgroundColor="#fff"> */}
                        <Box style={leftBoxStyle}>
                            <Box display="flex" alignItems="center" mt={3}>
                                {/* School Logo */}
                                <SchoolIcon style={{ color: '#b97eff', marginRight: "10px" }} />
                                {/* Edulog Text */}
                                <Typography variant="h5" align="center" style={{ color: '#b97eff', fontWeight: 'bold' }}>
                                    Edulog
                                </Typography>
                                {/* Points */}
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                paddingLeft="20px"
                                mt={2}
                            >
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>1.</b> Heading
                                </Typography>
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>2.</b> Working history
                                </Typography>
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>3.</b> Education
                                </Typography>
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>4.</b> Skills
                                </Typography>
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>5.</b> Summary
                                </Typography>
                                <Typography variant="subtitle1" align="left" style={{ padding: "5px 0px", fontWeight: "bold" }}>
                                    <b style={{ color: "#b97eff", paddingRight: "10px" }}>6.</b> Finalize
                                </Typography>
                            </Box>

                            {/* Logout Button */}
                            <Box display="flex" alignItems="center" mt={3}>
                                <LogoutIcon style={{ color: 'red', marginRight: '2px' }} />
                                <Button variant="text" color="error" size="small" style={{ fontWeight: 'bold' }}>
                                    Sign Out
                                </Button>
                            </Box>
                        </Box>
                        <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                        {formData.profileImage ? (
                                            <Avatar
                                                alt="Profile Image"
                                                src={URL.createObjectURL(formData.profileImage)}
                                                style={{ width: '100px', height: '100px', marginRight: '20px' }}
                                            />
                                        ) : (
                                            <Avatar
                                                alt="Default Profile Image"
                                                src="/path/to/default/image.jpg" // Replace this with the path to your default image
                                                style={{ width: '100px', height: '100px', marginRight: '20px' }}
                                            />
                                        )}
                                        <input
                                            accept="image/*"
                                            id="profile-image-upload"
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={handleImageChange}
                                        />
                                        <label htmlFor="profile-image-upload">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                component="span"
                                                style={buttonStyle}
                                                startIcon={<AddAPhotoIcon />}
                                            >
                                                Upload Image
                                            </Button>
                                        </label>
                                    </div>
                                </Grid>
                            
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Middle Name"
                                        name="middleName"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Roll No"
                                        name="rollNo"
                                        value={formData.rollNo}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Course</InputLabel>
                                        <Select
                                            label="Course"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            sx={{
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#b97eff',
                                                },
                                            }}
                                            required
                                        >
                                            <MenuItem value="course1">Course 1</MenuItem>
                                            <MenuItem value="course2">Course 2</MenuItem>
                                            {/* Add more course options as needed */}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Specification</InputLabel>
                                        <Select
                                            label="Specification"
                                            name="specification"
                                            value={formData.specification}
                                            onChange={handleChange}
                                            sx={{
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#b97eff',
                                                },
                                            }}
                                            required
                                        >
                                            <MenuItem value="spec1">Specification 1</MenuItem>
                                            <MenuItem value="spec2">Specification 2</MenuItem>
                                            {/* Add more specification options as needed */}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Gender</InputLabel>
                                        <Select
                                            label="Gender"
                                            name="gender"
                                            value={formData.gender}
                                            sx={{
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#b97eff',
                                                },
                                            }}
                                            onChange={handleChange} required>
                                            <MenuItem value="male">Male</MenuItem>
                                            <MenuItem value="female">Female</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Date of Birth"
                                        name="dob"
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        value={formData.dob}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Blood Group</InputLabel>
                                        <Select
                                            label="Blood Group"
                                            name="bloodGroup"
                                            value={formData.bloodGroup}
                                            onChange={handleChange}
                                            sx={{
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#b97eff',
                                                },
                                            }}
                                            required
                                        >
                                            <MenuItem value="A+">A+</MenuItem>
                                            <MenuItem value="A-">A-</MenuItem>
                                            <MenuItem value="B+">B+</MenuItem>
                                            <MenuItem value="B-">B-</MenuItem>
                                            <MenuItem value="O+">O+</MenuItem>
                                            <MenuItem value="O-">O-</MenuItem>
                                            <MenuItem value="AB+">AB+</MenuItem>
                                            <MenuItem value="AB-">AB-</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Disability</InputLabel>
                                        <Select
                                            label="Disability"
                                            name="disability"
                                            value={formData.disability}
                                            onChange={handleChange}
                                            sx={{
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#b97eff',
                                                },
                                            }}
                                            required
                                        >
                                            <MenuItem value="none">None</MenuItem>
                                            <MenuItem value="visual">Visual</MenuItem>
                                            <MenuItem value="hearing">Hearing</MenuItem>
                                            <MenuItem value="mobility">Mobility</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Language Known"
                                        name="languageKnown"
                                        value={formData.languageKnown}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Medical Record"
                                        name="medicalRecord"
                                        multiline
                                        rows={4}
                                        value={formData.medicalRecord}
                                        onChange={handleChange}
                                        sx={{
                                            "& .MuiInputLabel-root.Mui-focused": { color: "#b97eff" }, //styles the label
                                            "& .MuiOutlinedInput-root.Mui-focused": {
                                                "& > fieldset": {
                                                    borderColor: "#b97eff",
                                                }
                                            }
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            style={buttonStyle}
                                            startIcon={<SaveIcon />}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Paper>
            </Grid>

        </Box>
    );
};

export default RegistrationForm;
