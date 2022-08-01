import React from 'react';
import { useForm } from "react-hook-form";
const InputForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='w-50'>
                    <label htmlFor="site_id">Enter you site</label>
                    <br />
                    <input  {...register("site_id", { required: true })}
                        id="site_id"
                        className='form-control p-2'
                        type="text" placeholder='Enter the site id here' />
                    {errors.site_id && <span className='text-danger'>This field is required</span>}
                </div>
                <div className='mt-2'>
                    <label htmlFor='site_config' >Enter the site config</label>
                    <br />
                    <textarea maxLength={500} {...register("site_config", { required: true })} id='site_config'
                        className='form-control' placeholder='Enter your site config here' rows={6}>
                    </textarea>
                    <div className="d-flex justify-content-between">
                      <span className='text-danger'> {errors.site_config && "This field is required"}</span>
                        <p className='text_characters text-end mb-0'>{watch().site_config.length} out of 500 characters</p>
                    </div>
                </div>
                <div className='mt-4 d-flex gap-2 align-items-center'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p className='mb-0 '>Entered the site config</p>
                </div>
                <div className='d-flex justify-content-end gap-3'>
                    <button className='btn btn-outline-secondary'>Cencel</button>
                    <button className='btn btn-success'>Confirm</button>
                </div>
            </form>
        </>
    );
};

export default InputForm;