import React from 'react';
import { useForm } from 'react-hook-form';

const ValidationForm = () => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch(`https://limitless-reef-73871.herokuapp.com/AddData`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
            })
        reset()
    };


    return (
        <div>
            <div class="hero min-h-screen bg-base-secondary">
                <div class="hero-content ">
                    <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="card-body">
                                <h1 className='text-center font-bold text-secondary'>ADD DATA</h1>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Name" class="input input-bordered" />
                                    {errors.name?.type === 'required' && <span className='text-red-600'>First name is required</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true })}
                                        placeholder="email" class="input input-bordered" />
                                    {errors.email?.type === 'required' && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="text"
                                        {...register("phone", { required: true })}
                                        placeholder="Phone" class="input input-bordered" />
                                    {errors.phone?.type === 'required' && <span className='text-red-600'>Phone number is required</span>}
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-secondary hover:text-white">SUBMIT</button>
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