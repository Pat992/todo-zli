import React from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { TextField, TextFieldProps, Button, Grid, Typography } from '@material-ui/core'
import Todo from '../../model/Todo'
import * as Yup from 'yup'

interface ITodoForm {
    todo: Todo;
    submitTxt: string;
    submitFunc(todo: Todo): void;
    resetAfterSubmit: boolean;
}
const TodoForm: React.FC<ITodoForm> = props => {

    return (
        <Formik
            enableReinitialize
            initialValues={{ title: props.todo.title }}
            onSubmit={(values, { resetForm }) => {
                props.todo.title = values.title
                props.submitFunc(props.todo)
                if (props.resetAfterSubmit) { resetForm() }
            }}
            validationSchema={todoValidationSchema}
        >
            {({ errors, touched, values }) => (
                <Form style={{ marginBottom: "20px" }}>
                    <Typography variant="h3">{props.submitTxt}</Typography>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Field
                                name="title"
                                label="ToDo"
                                placeholder={props.submitTxt}
                                component={MaterialUiField}
                            />
                            {errors.title && touched.title ?
                                <Typography color="secondary">{errors.title}</Typography> :
                                null
                            }
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" fullWidth>{props.submitTxt}</Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}

// Helping component
// But why?
const MaterialUiField: React.FC<FieldProps & TextFieldProps> = ({ field, form, ...textProps }) => {
    return <TextField {...field} {...textProps} fullWidth />
}

// Validation schema
const todoValidationSchema = Yup.object().shape({
    title: Yup.string().required("A ToDo is required.")
})

export default TodoForm