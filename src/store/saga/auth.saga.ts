import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { API } from "../../config"
import {
	SIGNUP,
	SignupAction,
	signupFail,
	signupSuccess,
} from "../actions/auth.action"

function* handleSignup(action: SignupAction) {
	try {
		yield axios.post(`${API}/signup`, action.payload)
		yield put(signupSuccess())
	} catch (error) {
		yield put(signupFail(error.response.data.error))
	}
}

export default function* authSaga() {
	yield takeEvery(SIGNUP, handleSignup)
}
