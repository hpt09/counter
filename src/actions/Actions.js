export function onIncrement(step){
    return {
      type:"INC",
      step
    }
  }
  export function onDecrement(step){
    return {
      type:"DEC",
      step
    }
  }

  export function CallIncrement(step){
    //asynchronous operations can be written here.
    return (dispatch)=>{
      setTimeout(()=>{
          dispatch(onIncrement(step));
      },3000)
    }
  }
  