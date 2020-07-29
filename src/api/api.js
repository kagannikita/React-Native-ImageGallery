const url =
  'https://api.unsplash.com/photos/random?client_id=k32C9AOXSVLfRtvEsNK2XL7HUI7CS_AYt2iMxMOLnzE&count=15';
export const mainAPI = {
  getPhotos() {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        return console.log('asdada', res);
      });
  },
};
