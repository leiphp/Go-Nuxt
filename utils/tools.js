const Tools = {
  time2Min (time) {
    const hour = time.split(':')[0]
    const min = time.split(':')[1]
    const sec = time.split(':')[2]
    const s = Number(hour * 3600) + Number(min * 60) + Number(sec)
    return Number(s / 60).toFixed(2)
  },
  removeAllSpace (str) {
    return str.replace(/\s+/g, '')
  },
  transTime (str) {
    const d = new Date(str)
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  },
  transTime5 (str) {
    const d = new Date(str)
    return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  },
  transTime1 (str) {
    const d = new Date(str)
    const y = d.getFullYear()
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    return y + '-' + m + '-' + t
  },
  transTime2 (str) {
    const d = new Date(str)
    const y = d.getFullYear()
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    let h = d.getHours()
    let me = d.getMinutes()
    let s = d.getSeconds()
    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (me < 10) {
      me = `0${me}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    return y + '-' + m + '-' + t + ' ' + h + ':' + me + ':' + s
  },
  transTime3 (str) {
    const d = new Date(str)
    const y = d.getFullYear()
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    let h = d.getHours()
    let me = d.getMinutes()
    let s = d.getSeconds()
    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (me < 10) {
      me = `0${me}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    // return y + '-' + m + '-' + t+' '+h+':'+me+':'+s;
    return `${m}/${t}/${y} ${h}:${me}`
  },
  transTime4 (str) {
    const d = new Date(str * 1000)
    const y = d.getFullYear()
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    let h = d.getHours()
    let me = d.getMinutes()
    let s = d.getSeconds()
    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (me < 10) {
      me = `0${me}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    // return y + '-' + m + '-' + t+' '+h+':'+me+':'+s;
    return `${m}/${t}/${y} ${h}:${me}`
  },
  timestampToTime (str) {
    const d = new Date(str * 1000)
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  },
  timestampToTime1 (str) {
    const d = new Date(str * 1000)
    const y = d.getFullYear()
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    let h = d.getHours()
    let me = d.getMinutes()
    let s = d.getSeconds()
    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (me < 10) {
      me = `0${me}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    return y + '-' + m + '-' + t
    // return y + '-' + m + '-' + t + ' ' + h + ':' + me + ':' + s
    // return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
  },
  timestampToTime2 (str) {
    const d = new Date(str * 1000)
    // let y = d.getFullYear();
    let m = (d.getMonth() + 1)
    let t = d.getDate()
    let h = d.getHours()
    let me = d.getMinutes()
    let s = d.getSeconds()

    if (m < 10) {
      m = `0${m}`
    }
    if (t < 10) {
      t = `0${t}`
    }
    if (h < 10) {
      h = `0${h}`
    }
    if (me < 10) {
      me = `0${me}`
    }
    if (s < 10) {
      s = `0${s}`
    }
    return m + '月' + t + '日' + '  ' + h + ':' + me
  },
  /**
   * 验证邮箱是否合法
   * @param email
   * @returns {boolean}
   */
  checkEmail (email) {
    const eemail = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g

    if (!eemail.test(email)) {
      return false
    } else {
      return true
    }
  },
  /**
   * 手机号检测
   * @param $poneInput
   * @returns {boolean}
   */
  isPoneAvailable ($poneInput) {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test($poneInput)) {
      return false
    } else {
      return true
    }
  },
  /**
   * 检测链接地址是否有效合法
   */
  checkURL (URL) {
    const str = URL
    // 判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    // 下面的代码中应用了转义字符"\"输出一个字符"/"
    const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/
    const objExp = new RegExp(Expression)
    if (objExp.test(str) === true) {
      return true
    } else {
      return false
    }
  },
  // 对象数组的去重
  uniqObjInArray (objarray) {
    const len = objarray.length
    const tempJson = {}
    const res = []
    for (let i = 0; i < len; i++) {
      // 取出每一个对象
      tempJson[JSON.stringify(objarray[i])] = true
    }
    const keyItems = Object.keys(tempJson)
    for (let j = 0; j < keyItems.length; j++) {
      res.push(JSON.parse(keyItems[j]))
    }
    return res
  }
}

export default Tools
