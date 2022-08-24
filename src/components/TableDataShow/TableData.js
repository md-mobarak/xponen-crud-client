import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';




const TableData = ({ tData, index }) => {
    const { name, email, _id, phone } = tData

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://limitless-reef-73871.herokuapp.com/DataDelete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                })
        }

    }
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const id = tData._id;
        const { name, email, phone } = data
        const currentData = { name, email, phone }
        if (id) {
            fetch(`https://limitless-reef-73871.herokuapp.com/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentData)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                })
            reset()
        }
    };
    return (
        <tr>
            <th>{index}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                {/* <!-- The button to open modal --> */}
                <label for="my-modal-3" class="btn modal-button">UPDATE</label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form className='grid grid-cols-1' onSubmit={handleSubmit(onSubmit)}>
                            <h1 className='text-3xl font-bold text-secondary my-4'>UPDATE DATA</h1>
                            <input type="text" placeholder="Name"
                                {...register("name", { required: true })}
                                class="input input-bordered input-accent w-full max-w-xs" />
                            {errors.name?.type === 'required' && <span className='text-red-600'>First name is required</span>}

                            <input type="text" placeholder="Email"
                                {...register("email", { required: true })}
                                class="input input-bordered input-accent w-full max-w-xs my-4" />
                            {errors.email?.type === 'required' && <span className='text-red-600'>Email is required</span>}


                            <input type="text" placeholder="Phone"
                                {...register("phone", { required: true })}
                                class="input input-bordered input-accent w-full max-w-xs" />
                            {errors.phone?.type === 'required' && <span className='text-red-600'>Phone number is required</span>}
                            <button className='btn my-4 btn-secondary w-3/4'>UPDATE</button>
                        </form>
                    </div>
                </div></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-tiny bg-red-600 text-white border-0'>Delete</button></td>
        </tr>
    );
};

export default TableData;