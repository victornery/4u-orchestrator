export const transformMoney = (value) => {

  const isNumber = typeof value === "number"
  console.log(isNumber)
  const transformToBRMoney = (value) => value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  const transformInNumber = (value) => parseFloat(value)

  return `R$ ${transformToBRMoney(transformInNumber(value))}`
}