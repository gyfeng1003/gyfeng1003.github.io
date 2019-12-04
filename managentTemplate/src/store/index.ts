import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from '@/store/modules/app'
import { ITagsViewState } from './modules/tags-view'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState,
  tagsView: ITagsViewState
}

export default new Vuex.Store<IRootState>({})
