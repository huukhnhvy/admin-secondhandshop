import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgetpassword = () => {
    return (
        <div className='py-5' style={{ background: '#ffd333', minHeight: '100vh' }}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
                <h3 className='text-center title'>Quên mật khẩu</h3>
                <p className='text-center'>Vui lòng nhập email của tài khoản để nhận mật khẩu mới.</p>
                <form action=''>
                    <CustomInput type='text' label='Email' id='email' />
                    <button style={{ background: '#ffd333' }}
                        className='border-0 px-3 py-2 text-white fx-bold w-100'
                        type='submit'>Gửi mật khẩu</button>
                </form>
            </div>
        </div>
    )
}

export default Forgetpassword