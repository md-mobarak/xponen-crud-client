import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const TableDAtaShow = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch('https://limitless-reef-73871.herokuapp.com/allData')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTableData(data)
            })
    }, [tableData])

    return (
        <div className='px-20 my-[-40px]'>
            <h1 className='text-center font-bold text-3xl text-primary'>TABLE DATA</h1>
            <div class="overflow-x-auto ">
                <table class="table table-zebra w-full ">

                    <thead className='bg-primary'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action update</th>
                            <th>Action Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((tData, index) => <TableData tData={tData} index={index + 1}></TableData>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default TableDAtaShow;