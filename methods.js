function filterNfts(nfts) {
  return nfts.filter(({ price }) => price > 500);
}

function getTotalPrice(nfts) {
  return nfts.reduce((init, { price }) => {
    return init + price;
  }, 0);
}

function groupByNameTotal(nfts) {
  const groupByName = nfts.reduce((init, { name, price }) => {
    return { ...init, [name]: init[name] ? [...init[name], price] : [price] };
  }, {});

  for (const key in groupByName) {
    groupByName[key] = groupByName[key].reduce((init, curr) => {
      return init + curr;
    }, 0);
  }
  return groupByName;
}

module.exports = {
  filterNfts,
  getTotalPrice,
  groupByNameTotal,
};
