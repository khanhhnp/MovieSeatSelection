import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../Data/danhSachGhe.json';
import HangGhe from './HangGhe';

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className='bookingMovie'
        style={{
          // position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: "url('./image/bgmovie.jpg')",
          backgroundSize: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            // position: 'fixed',
            width: '100%',
            height: '100%',
          }}
        >
          <div className='container-fluid'>
            <div className='row mt-2'>
              <div className='col-8 text-center'>
                <h1 className='text-warning'>BÀI TẬP ĐẶT VÉ CYBERLEARN.VN</h1>
                <p className='mt-3 text-white' style={{ fontSize: '20px' }}>
                  Màn hình
                </p>
                <div
                  className='mt-1'
                  style={{
                    display: 'flexed',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p className='screen'></p>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className='col-4'>
                <h2 className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h2>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
