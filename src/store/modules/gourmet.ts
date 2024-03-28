import { defineStore } from 'pinia';
import { store } from '/@/store';
import { GetUserInfoModel } from '/@/api/sys/model/userModel';

interface GourmetState {
  id: number;
  title: string;
  description: string;
  updatedAt: string;
  imageList: any[];
  user: Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'>;
}

export const gourmetStore = defineStore({
  id: 'gourmet',
  state: (): GourmetState => ({
    id: 0,
    title: '',
    description: '',
    updatedAt: '',
    imageList: [],
    user: {
      userId: 0,
      username: '',
      avatar: '',
    },
  }),
  getters: {
    getTitle(state): string {
      return state.title;
    },
    getDescription(state): string {
      return state.description;
    },
    getUpdatedAt(state): string {
      return state.updatedAt;
    },
    getImageList(state): any[] {
      return state.imageList;
    },
    getUser(state): Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'> {
      return state.user;
    },
    getAll(state): GourmetState {
      return state;
    },
  },
  actions: {
    setTitle(title: string) {
      this.title = title;
    },
    setDescription(description: string) {
      this.description = description;
    },
    setUpdatedAt(updatedAt: string) {
      this.updatedAt = updatedAt;
    },
    setImageList(imageList: any[]) {
      this.imageList = imageList;
    },
    setUser(user: Pick<GetUserInfoModel, 'userId' | 'username' | 'avatar'>) {
      this.user = user;
    },
    setAll(data: GourmetState) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
  },
});

export function useAppStoreWithOut() {
  return gourmetStore(store);
}
