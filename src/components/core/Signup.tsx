import { Button, Form, Input } from "antd"
import React from "react"
import { useDispatch } from "react-redux"
import { signup, SingupPayload } from "../../store/actions/auth.action"
import Layout from "./Layout"

const Signup = () => {
	const dispatch = useDispatch()
	const onFinish = (value: SingupPayload) => {
		console.log("value: ", value)
		dispatch(signup(value))
	}
	return (
		<Layout title="注册" subTitle="">
			<Form onFinish={onFinish}>
				<Form.Item label="昵称" name="name">
					<Input />
				</Form.Item>
				<Form.Item label="邮箱" name="email">
					<Input />
				</Form.Item>
				<Form.Item label="密码" name="password">
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						注册
					</Button>
				</Form.Item>
			</Form>
		</Layout>
	)
}

export default Signup
