export  const mockData = [
   {value: 'Frank Reynolds', type: 'Name'},
   {value: '2082065039', type: 'Phone'},
   {value: 'wolfCola@gmail.com', type: 'Email'},
   {value: 'Hi my name is Mica Smith. I am from Mesa but go to school in Salt Lake City. I make this drive all the time and have plenty', type: 'About'}
]

  export const phoneNumberFormatter = (num)=> {
    const numArr = num.split('')
    const areaCode = `(${numArr.slice(0,3).join('')})`
    const digits = `${numArr.slice(3, 6).join('')}-${numArr.slice(6).join('')}`
    return `${areaCode} ${digits}`
  }