import React from 'react';

const TableData = () => {
    return (
        <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
                {/* <!-- The button to open modal --> */}
                <label for="my-modal-3" class="btn modal-button">open modal</label>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form className='grid grid-cols-1'>
                            <h1 className='text-3xl font-bold text-secondary my-4'>UPDATE DATA</h1>
                            <input type="text" placeholder="Name" class="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" placeholder="Email" class="input input-bordered input-accent w-full max-w-xs my-4" />
                            <input type="text" placeholder="Phone" class="input input-bordered input-accent w-full max-w-xs" />
                            <button className='btn my-4 btn-secondary w-3/4'>UPDATE</button>
                        </form>
                    </div>
                </div></td>
            <td><button className='btn btn-tiny bg-red-600 text-white border-0'>Delete</button></td>
        </tr>
    );
};

export default TableData;