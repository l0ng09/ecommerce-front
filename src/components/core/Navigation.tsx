import React from "react"
import { Menu } from "antd"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../store/reducers"
import { RouterState } from "connected-react-router"

const useActive = (currentPath: string, path: string): string => {
	return currentPath === path ? "ant-menu-item-active" : ""
}

const Navigation = () => {
	// AppState 指定 state 的类型， RouterState 指定返回值的类型
	const router = useSelector<AppState, RouterState>((state) => state.router)
	const currentPath = router.location.pathname
	const isHome = useActive("/", currentPath)
	const isShop = useActive("/shop", currentPath)
	const isSignin = useActive("/signin", currentPath)
	const isSignup = useActive("/signup", currentPath)

	return (
		<div>
			<Menu mode="horizontal" selectable={false}>
				<Menu.Item className={isHome}>
					<Link to="/">首页</Link>
				</Menu.Item>
				<Menu.Item className={isShop}>
					<Link to="/shop">商城</Link>
				</Menu.Item>
				<Menu.Item className={isSignin}>
					<Link to="/signin">登录</Link>
				</Menu.Item>
				<Menu.Item className={isSignup}>
					<Link to="/signup">注册</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Navigation
