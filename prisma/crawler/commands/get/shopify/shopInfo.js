export async function shopInfo() {
  const { shopList } = this

  //   const shopInfo = []

  //   const firstShop = shopList[0]

  //   const { businessName, domain } = firstShop

  //   shopList.forEach(async ({ domain, businessName }) => {
  //     for (let page = 1; page <= 20; page++) {
  //const url = `https://${domain}/shop.json`
  const url = "https://babyandme.ca/shop.json"
  const response = await fetch(url)
  console.log("response: ", response)
  //const data = await response.json()
  //console.log("data: ", data)

  //if (data.products.length === 0) break

  //   data.products.forEach((productInfo) => {
  //     shopInfo.push({ shop: businessName, ...productInfo })
  //   })
  //     }
  //   })
  //  console.log("shopInfo : ", shopInfo)

  //  await fs.writeFileSync("products.json", JSON.stringify(data, null, 4))
}
