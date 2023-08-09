import create from "zustand";

interface GlobalStore {
  uploadedImage: Blob | null;
  setUploadedImage: (file: Blob) => void;
  clearUploadedImage: () => void;
}

export type MyState = GlobalStore; // combine with other slices through "&"

const useStore = create<MyState>((set, get) => ({
  uploadedImage: null,
  setUploadedImage: (img: Blob) => {
    set(() => ({ uploadedImage: img }));
  },
  clearUploadedImage: () => {
    set(() => ({ uploadedImage: null }));
  },
}));

export default useStore;
