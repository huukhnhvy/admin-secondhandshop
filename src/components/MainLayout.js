import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BiUser } from 'react-icons/bi';
import { AiOutlineShopping } from 'react-icons/ai';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'>SH</span>
                        <span className='lg-logo'>SecondHand</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == 'signout') {

                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <LuLayoutDashboard className='fs-4' />,
                            label: 'Trang chủ',
                        },
                        {
                            key: 'customers',
                            icon: <BiUser className='fs-4' />,
                            label: 'Khách hàng',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShopping className='fs-4' />,
                            label: 'Sản phẩm',
                            children: [
                                {
                                    key: 'product',
                                    label: 'Thêm sản phẩm',
                                },
                                {
                                    key: 'product-list',
                                    label: 'Danh sách sản phẩm',
                                }
                            ]
                        },

                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    className='d-flex justify-content-between pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-4 align-items-center' dropdown>
                        <div className='position-relative'>
                            <IoIosNotifications className='fs-4' />
                            <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div>
                                <img src='https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg'></img>
                            </div>
                            <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <h5 className='mb-0'>Admin</h5>
                                <p className='mb-0'>admin@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" style={{ "height": "auto", "lineHeight": "20px" }} aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
                                <li><a class="dropdown-item" href="#">Đổi mật khẩu</a></li>
                                <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;