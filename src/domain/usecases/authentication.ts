import { AccountModel } from '../models/account-model'

type AuthenticationPrams = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationPrams): Promise<AccountModel>
}
