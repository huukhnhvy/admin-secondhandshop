import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';
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
const Dashboard = () => {
    const data = [
        {
            type: 'Tháng 1',
            sales: 38,
        },
        {
            type: 'Tháng 2',
            sales: 52,
        },
        {
            type: 'Tháng 3',
            sales: 61,
        },
        {
            type: 'Tháng 4',
            sales: 145,
        },
        {
            type: 'Tháng 5',
            sales: 48,
        },
        {
            type: 'Tháng 6',
            sales: 38,
        },
        {
            type: 'Tháng 7',
            sales: 38,
        },
        {
            type: 'Tháng 8',
            sales: 38,
        },
        {
            type: 'Tháng 9',
            sales: 50,
        },
        {
            type: 'Tháng 10',
            sales: 60,
        },
        {
            type: 'Tháng 11',
            sales: 88,
        },
        {
            type: 'Tháng 12',
            sales: 92,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return '#ffd333';
        },
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'month',
            },
            sales: {
                alias: 'income',
            },
        },
    };
    return (
        <div>
            <h3 className='mb-4 title'>Thống kê</h3>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
                    <div><p className='desc'>Doanh thu</p> <h4 className='mb-0 sub-title'>3.000.000 VNĐ</h4></div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'><BsArrowUpRight />32%</h6>
                        <p className='mb-0 desc'>Đối với tháng 11/2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
                    <div><p className='desc'>Doanh thu</p> <h4 className='mb-0 sub-title'>3.000.000 VNĐ</h4></div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'><BsArrowUpRight />32%</h6>
                        <p className='mb-0 desc'>Đối với tháng 11/2023</p>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
                    <div><p className='desc'>Doanh thu</p> <h4 className='mb-0 sub-title'>3.000.000 VNĐ</h4></div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='red'><BsArrowDownRight />32%</h6>
                        <p className='mb-0 desc'>Đối với tháng 11/2023</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='mb-5 title'>Biểu đồ doanh thu</h3>
                <div>
                    <Column {...config} />
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='mb-5 title'>Đơn hàng đang xử lý</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard