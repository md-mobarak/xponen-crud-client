import React from 'react';
import { useForm } from 'react-hook-form';

const ValidationForm = () => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data)
        reset()
    };


    return (
        <div>
            <div class="hero min-h-screen bg-base-secondary">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="card-body">
                                <h1 className='text-center font-bold text-primary'>ADD DATA</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Name" class="input input-bordered" />
                                    {errors.firstName?.type === 'required' && "First name is required"}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true })}
                                        placeholder="email" class="input input-bordered" />
                                    {errors.email?.type === 'required' && "First name is required"}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="text"
                                        {...register("phone", { required: true })}
                                        placeholder="Phone" class="input input-bordered" />
                                    {errors.phone?.type === 'required' && "First name is required"}
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValidationForm;