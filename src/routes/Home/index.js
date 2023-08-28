import React from 'react'
import {Carousel} from 'antd'
import './style.css'

// const imgs = [
//   'http://47.99.130.140/imgs/wallhaven-p8r1e9.jpg',
//   'http://47.99.130.140/imgs/wallhaven-e7zyy8.jpg',
//   'http://47.99.130.140/imgs/wallhaven-6k9e7q.jpg',
//   'http://47.99.130.140/imgs/photo.jpg',
// ]

const imgs = [
  'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9d82d158ccbf6c81c27c7f7fbe3eb13532fa40d9.jpg',
  'https://ossbz.j9s.cn/img/924/0_1_202071518533711174.jpg',
  'https://i0.hdslb.com/bfs/article/433fc50defa300728b10bf674ccc68a5903a71be.jpg',
]

class Home extends React.Component {
  render() {
    return (
      <div style={styles.bg} className='home'>
        <Carousel arrows effect='fade' className='size'>
          {imgs.map(item=><div key={item}><div className='size' style={{backgroundImage:`url(${item})`}}/></div>)}
          {/*不用img标签是因为图片大小会出现问题*/}
        </Carousel>
      </div>
    )
  }
}

const styles = {
  bg:{
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'calc(100vh - 64px)'
  }
}

export default Home