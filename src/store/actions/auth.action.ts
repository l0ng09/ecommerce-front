export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAIL = "SIGNUP_FAIL"

// 定义接口的形状

export interface SingupPayload {
	name: string
	password: string
	email: string
}

export interface SignupAction {
	type: typeof SIGNUP
	payload: SingupPayload
}

export interface SignupSuccessAction {
	type: typeof SIGNUP_SUCCESS
}

export interface SignupFailAction {
	type: typeof SIGNUP_FAIL
	message: string
}

// 创建 action creator

export const signup = (payload: SingupPayload): SignupAction => ({
	type: SIGNUP,
	payload,
})

export const signupSuccess = (): SignupSuccessAction => ({
	type: SIGNUP_SUCCESS,
})

export const signupFail = (message: string): SignupFailAction => ({
	type: SIGNUP_FAIL,
	message,
})

// 统一到处一个联合类型
export type AuthUnionType =
	| SignupAction
	| SignupFailAction
	| SignupSuccessAction
