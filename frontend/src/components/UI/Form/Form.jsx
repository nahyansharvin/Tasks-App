import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Button,
    Container,
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from '@mui/material';
import { AddTask } from '../../../services/TaskService';
import { Success } from '../../common/Toast';
import { useNavigate } from 'react-router';

const Form = () => {
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        description: '',
        priority: '',
        image: "image",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        priority: Yup.string().required('Priority is required'),
        image: Yup.mixed().required('Image is required'),
    });

    const onSubmit = async (values) => {
        await AddTask(values);
        Success('Task Added Successfully');
        formik.resetForm();
        navigate('/');
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit} className='bg-white p-8 rounded-md'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="priority-label">Priority</InputLabel>
                            <Select
                                labelId="priority-label"
                                name="priority"
                                value={formik.values.priority}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.priority && Boolean(formik.errors.priority)}
                            >
                                <MenuItem value="low">Low</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            name="description"
                            multiline
                            rows={3}
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <input
                            type="file"
                            name="image"
                            onChange={(event) => formik.setFieldValue('image', event.target.files[0])}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.image && formik.errors.image && (
                            <div style={{ color: 'red' }}>{formik.errors.image}</div>
                        )}
                    </Grid> */}
                </Grid>
                <div className='flex justify-end mt-4'>
                    <Button type="submit" variant="contained" color="primary">
                        Add Task
                    </Button>
                </div>
            </form>
        </Container>
    );
}

export default Form