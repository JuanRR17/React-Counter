export const getSecondsArray = (seconds) =>{
    let array = Array(6).fill("0");
    let time = seconds.toString().split("").reverse();
  
    for(let num in array){
      if(time[num])
      array[num] = time[num]
    }

    return array.reverse()
  }