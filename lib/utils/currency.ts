const currency = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
})
const number = Intl.NumberFormat('en-US', {minimumFractionDigits: 0})

export const toUSD = (v: number, symbol = true) => {
  let modV = v
  if (!isNaN(v)) {
    return symbol ? currency.format(v) : number.format(v)
  }
  return modV
}

export default currency
