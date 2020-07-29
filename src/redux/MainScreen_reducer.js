import {mainAPI} from './../api/api';
const SET_PHOTOS = 'main/SET_PHOTOS';
let initialState = {
  photos: [],
};
export const mainReducer = (state = initialState, action) => {
  if (action.type === SET_PHOTOS) {
    return {
      ...state,
      photos: [...action.photos],
    };
  } else {
    return state;
  }
};
export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  photos,
});
export const setPhotosTC = () => async (dispatch) => {
  let photos = await mainAPI.getPhotos();
  dispatch(setPhotos(photos));
};
