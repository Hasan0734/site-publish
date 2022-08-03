import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
const InputForm = () => {
    const [disable, setDisable] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { siteconfig } = watch();


    const onSubmit = (data: any) => {
        setDisable(true)
        // receive from data site, siteconfig, addSiteConfig
        console.log(data)


        // just loading 3s for this
        setTimeout(() => {
            setDisable(false)
            toast.success('Submit successfully')
        }, 3000);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='w-50'>
                    <label htmlFor="site">Enter you site</label>
                    <br />
                    <input  {...register("site", { required: true })}
                        id="site"
                        className='form-control p-2'
                        type="text" placeholder='Enter the site id here' />
                    {errors.site && <span className='text-danger'>This field is required</span>}
                </div>


                <div className='mt-2'>
                    <label htmlFor='siteconfig' >Enter the site config</label>
                    <br />
                    <textarea maxLength={500}
                        {...register("siteconfig", { required: true })}
                        id='siteconfig'
                        className='form-control' placeholder='Enter your site config here' rows={6}>
                    </textarea>
                    <div className="d-flex justify-content-between">
                        <span className='text-danger'>
                            {errors.siteconfig && "This field is required"}</span>
                        <p className='text_characters text-end mb-0'>
                            {siteconfig?.length || 0} out of 500 characters</p>

                    </div>
                </div>


                <div className='mt-4 d-flex gap-2 align-items-center'>
                    <label className="switch">
                        <input  {...register("addSiteConfig", { required: true })} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <p className={`mb-0 ${errors.addSiteConfig ? 'text-danger' : ''}`}>Entered the site config</p>
                </div>
                <div className='d-flex justify-content-end gap-3'>
                    <button type='reset' className='btn btn-outline-secondary'>Cencel</button>
                    <button disabled={disable} type='submit' className='btn btn-success'>Confirm</button>
                </div>
            </form>
        </>
    );
};

export default InputForm;