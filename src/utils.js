function arr_to_str(arr) {
  return "["+arr.map(x => '"'+x+'"').join(",")+"]"
}

function mul_by_dec(x, decimals=18) {
  return x*Math.pow(10, decimals)
}

function div_by_dec(x, decimals=18) {
  return x/Math.pow(10, decimals)
}

function wei_to_eth(x) {
  return div_by_dec(x, 18)
}

function eth_to_wei(x) {
  return mul_by_dec(x, 18)
}

export default {
  arr_to_str,
  mul_by_dec,
  div_by_dec,
  wei_to_eth,
  eth_to_wei
}