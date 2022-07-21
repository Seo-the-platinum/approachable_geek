export const INVALID_ABOUT = 'Field must not be empty'
export const INVALID_EMAIL = 'Please make sure that you have entered a valid email address'
export const INVALID_NAME = 'Field must not be empty and must contain only letters'
export const INVALID_PHONE = 'Please make sure you have entered a 10 digit number including your area code'

export  const mockData = [
   {value: 'Frank Reynolds', type: 'Name'},
   {value: '(208) 206-5039', type: 'Phone'},
   {value: 'wolfCola@gmail.com', type: 'Email'},
   {
    value: `Hi, I'm Frank Reynolds, owner and CEO of wolfcola. I aslo own a bar called Paddy's Pub.I spend a lot of time hanging out under bridges because you can find a lot of good stuff`,
    type: 'About'
  }
]

export const phoneNumberFormatter = (num)=> {
  const numArr = num.split('')
  const areaCode = `(${numArr.slice(0,3).join('')})`
  const digits = `${numArr.slice(3, 6).join('')}-${numArr.slice(6).join('')}`
  return `${areaCode} ${digits}`
}

export const validateName = (str)=> {
  const letters = /^[A-Za-z]+$/
  if (str.match(letters)) {
    return true
  } else {
    return false
  }
}

export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true
  }
}