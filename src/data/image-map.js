const imageMap = [
  {
    name: '摩羯座',
    image: require('../assets/images/mo-jie.jpg')
  },

  {
    name: '水瓶座',
    image: require('../assets/images/shui-ping.jpg')
  },
  {
    name: '双鱼座',
    image: require('../assets/images/shuang-yu.jpg')
  },
  {
    name: '白羊座',
    image: require('../assets/images/bai-yang.jpg')
  },
  {
    name: '金牛座',
    image: require('../assets/images/jin-niu.jpg')
  },
  {
    name: '双子座',
    image: require('../assets/images/shuang-zi.jpg')
  },
  {
    name: '巨蟹座',
    image: require('../assets/images/ju-xie.jpg')
  },
  {
    name: '狮子座',
    image: require('../assets/images/shi-zi.jpg')
  },
  {
    name: '处女座',
    image: require('../assets/images/chu-nv.jpg')
  },
  {
    name: '天秤座',
    image: require('../assets/images/tian-cheng.jpg')
  },
  {
    name: '天蝎座',
    image: require('../assets/images/tian-xie.jpg')
  },
  {
    name: '射手座',
    image: require('../assets/images/she-shou.jpg')
  }
]

export function getImageByConsName (consName) {
  const [data] = imageMap.filter(function imageFilter ({ name }) {
    return consName === name
  })
  if (data) {
    return data.image
  }
}