import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyGheAction } from '../redux/actions/BaiTapDatVeAction';
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế đã được đặt
          </span>
          <br />
          <button className='gheDangChon'></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế đang đặt
          </span>
          <br />
          <button className='ghe' style={{ marginLeft: '0px' }}></button>{' '}
          <span className='text-light' style={{ fontSize: '25px' }}>
            : Ghế chưa đặt
          </span>
        </div>
        <div className='mt-5'>
          <table class='table' border='2'>
            <thead className='text-light' style={{ fontSize: '20px' }}>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <th className='text-success'>{gheDangDat.soGhe}</th>
                    <th className='text-warning'>
                      {gheDangDat.gia.toLocaleString()}
                    </th>
                    <th>
                      <button
                        className='btn-danger'
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className='text-primary'>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tonTien, gheDangDat, index) => {
                      return (tonTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangDat: rootReducer.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
