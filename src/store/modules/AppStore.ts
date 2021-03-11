import { User } from '@/models/User'
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'AppStore' })
export default class AppStore extends VuexModule {
  user?: User = undefined

  @Mutation
  setUser(user?: User) {
    this.user = user
  }
}
