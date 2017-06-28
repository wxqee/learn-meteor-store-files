let imageStore = new FS.Store.GridFS("images");

export const Images = new FS.Collection("images", {
 stores: [imageStore]
});
