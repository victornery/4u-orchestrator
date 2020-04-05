export const transformMoney = (value) => {

  const transformToBRMoney = (value) => value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  const transformInNumber = (value) => parseFloat(value)

  return `R$ ${transformToBRMoney(transformInNumber(value))}`
}