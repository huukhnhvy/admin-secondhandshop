import React from 'react'
import { Table } from 'antd';
const columns = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'key',
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
    },
    {
        title: 'Tổng tiền',
        dataIndex: 'price',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        price: '500.000 VNĐ',
        address: `London, Park Lane no. ${i}`,
    });
}
const Customers = () => {
    return (
        <div>
            <h3 className='mb-4 title'>Danh sách khách hàng</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Customers