import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

function Demo(){
	//console.log('Demo');

	const [count,setCount] = React.useState(0)
	const myRef = React.useRef()
	// useEffect相当于class组件内的DidMount, Didupdate， WillUnmount生命周期
	// 他接受两个参数，一个函数，一个数组， 如果只传入一个函数则两个生命周期都生效
	// []内可以写如当前函数的state项，数据和Didupdate生命周期对应，便是监视对应的项，如果不传则Didupdate生命周期不会调用
	// 它还可以return一个函数，表示willUnmount钩子
	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		return ()=>{
			clearInterval(timer)
		}
	},[])

	//加的回调
	function add(){
		//setCount(count+1) //第一种写法
		setCount(count => count+1 )
	}

	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef}/>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo
