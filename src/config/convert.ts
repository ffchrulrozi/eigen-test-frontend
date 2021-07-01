import moment from "moment"
import "moment/locale/id"

export const toDate = (date:any) => {
  return moment(date).format('LL')
}

export const toShortText = (text:string='', length = 50) => {
  let output = text?.substr(0, length)
  if(text?.length > length){
    output += '...'
  }
  return output
}