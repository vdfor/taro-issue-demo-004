import React, { FC,useState } from 'react'
import { View, Input } from '@tarojs/components'
import styles from './index.module.scss'

const Index:FC = () => {
  const [text, setText] = useState('');

  const onInput = (e:any) => {
    /**
     * 微信小程序注释以下input可正常输入(这时组件不会重新render) 或者 将input的value设置为 text
     */
    setText(e.detail.value);
  }

  return (
    <View className={styles.wrap}>
      <Input value={process.env.TARO_ENV === 'weapp' ? '测试' : text} onInput={onInput} className={styles.input} placeholder='请输入...' />
          <View>输入的值：{text}</View>
    </View>
  )
}

export default Index;