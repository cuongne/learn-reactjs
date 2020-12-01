import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/inputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
TodoForm.propTypes = {

};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Plese Enter Title'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    })
    const handleSubmit = (values) => {
        // console.log('Todo form', values);
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} />
        </form>
    );
}

export default TodoForm;