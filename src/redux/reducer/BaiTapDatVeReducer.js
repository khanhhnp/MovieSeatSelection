import { DAT_GHE, HUY_GHE } from '../types/BaiTapDatVeType';

const stateDefault = {
  danhSachGheDangDat: [
    // { soGhe: 'A1', gia: 1000 },
    // { soGhe: 'B1', gia: 1000 },
  ],
};
const BaiTapDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe,
      );
      if (index !== -1) {
        // Khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // Khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      // Cập nhật lại State => render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe,
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapDatVeReducer;
