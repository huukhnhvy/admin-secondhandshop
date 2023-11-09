import React from 'react'
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";
const columns = [
    {
        title: 'Mã sản phẩm',
        dataIndex: 'key',
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
    },
    {
        title: 'Giá tiền',
        dataIndex: 'price',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
    },
    {
        title: "Tùy chọn",
        dataIndex: "action",
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        price: '100.000 VNĐ',
        description: `London, Park Lane no. ${i}`,
        action: (
            <>
                <Link to="/" className=" fs-3 text-danger">
                    <BiEdit />
                </Link>
                <Link className="ms-3 fs-3 text-danger" to="/">
                    <AiFillDelete />
                </Link>
            </>
        ),
    });
}
const ProductList = () => {
    return (
        <div>
            <h3 className='mb-4 title'>Danh sách sản phẩm</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ProductList