import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center title'>Đổi mật khẩu</h3>
                <p className='text-center'>Vui lòng nhập mật khẩu mới.</p>
                <form action=''>
                    <CustomInput type='password' label='Mật khẩu mới' id='pass' />
                    <CustomInput type='password' label='Xác nhận mật khẩu' id='confirmpass' />
                    <button style={{ background: '#ffd333' }}
                        className='border-0 px-3 py-2 text-white fx-bold w-100'
                        type='submit'>Xác nhận</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword