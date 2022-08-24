import React, { useState } from 'react';

const TableDAtaShow = () => {
    const [tableData, setTableData] = useState([])
    return (
        <div className='px-20 my-[-40px]'>
            <h1 className='text-center font-bold text-3xl text-primary'>TABLE DATA</h1>
            <div class="overflow-x-auto ">
                <table class="table table-zebra w-full ">

                    <thead className='bg-primary'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Job</th>
                            <th>Action update</th>
                            <th>Action Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default TableDAtaShow;