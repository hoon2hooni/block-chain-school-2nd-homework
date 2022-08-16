const methods = require("./methods");

describe("과제 1-1번", () => {
  it("테스트케이스 1", () => {
    const nfts = [
      { name: "Dog", price: 101 },
      { name: "Dog", price: 318 },
      { name: "Cow", price: 369 },
      { name: "Lion", price: 691 },
      { name: "Lion", price: 435 },
      { name: "Dog", price: 423 },
      { name: "Dog", price: 900 },
      { name: "Dog", price: 500 },
      { name: "Cat", price: 566 },
      { name: "Fish", price: 392 },
      { name: "Fish", price: 635 },
    ];
    const answer = [
      { name: "Lion", price: 691 },
      { name: "Dog", price: 900 },
      { name: "Cat", price: 566 },
      { name: "Fish", price: 635 },
    ];
    expect(methods.filterNfts(nfts)).toEqual(expect.arrayContaining(answer));
  });
  it("테스트케이스 2", () => {
    const nfts = [{ name: "Dog", price: 101 }];
    const answer = [];
    expect(methods.filterNfts(nfts)).toEqual(expect.arrayContaining(answer));
  });

  it("테스트케이스 3", () => {
    const nfts = [{ name: "Dog", price: 501 }];
    const answer = [{ name: "Dog", price: 501 }];
    expect(methods.filterNfts(nfts)).toEqual(expect.arrayContaining(answer));
  });

  it("테스트케이스 4", () => {
    const nfts = [{ name: "Dog", price: 500 }];
    const answer = [];
    expect(methods.filterNfts(nfts)).toEqual(expect.arrayContaining(answer));
  });
});

describe("과제 1-2번", () => {
  it("테스트케이스 1", () => {
    const nfts = [
      { name: "Dog", price: 101 },
      { name: "Dog", price: 318 },
      { name: "Cow", price: 369 },
      { name: "Lion", price: 691 },
      { name: "Lion", price: 435 },
      { name: "Dog", price: 423 },
      { name: "Dog", price: 900 },
      { name: "Cat", price: 566 },
      { name: "Fish", price: 392 },
      { name: "Fish", price: 635 },
    ];
    const answer = 4830;
    expect(methods.getTotalPrice(nfts)).toBe(answer);
  });
  it("테스트케이스 2", () => {
    const nfts = [{ name: "Dog", price: 101 }];
    const answer = 101;
    expect(methods.getTotalPrice(nfts)).toBe(answer);
  });

  it("테스트케이스 3", () => {
    const nfts = [
      { name: "Dog", price: 501 },
      { name: "Dog", price: 503 },
    ];
    const answer = 1004;
    expect(methods.getTotalPrice(nfts)).toBe(answer);
  });

  it("테스트케이스 4", () => {
    const nfts = [];
    const answer = 0;
    expect(methods.getTotalPrice(nfts)).toBe(answer);
  });
});

describe("과제 1-3번", () => {
  it("테스트케이스 1", () => {
    const nfts = [
      { name: "Dog", price: 101 },
      { name: "Dog", price: 318 },
      { name: "Cow", price: 369 },
      { name: "Lion", price: 691 },
      { name: "Lion", price: 435 },
      { name: "Dog", price: 423 },
      { name: "Dog", price: 900 },
      { name: "Cat", price: 566 },
      { name: "Fish", price: 392 },
      { name: "Fish", price: 635 },
    ];
    const answer = {
      Cat: 566,
      Cow: 369,
      Dog: 1742,
      Fish: 1027,
      Lion: 1126,
    };
    expect(methods.groupByNameTotal(nfts)).toEqual(answer);
  });
  it("테스트케이스 2", () => {
    const nfts = [{ name: "Dog", price: 101 }];
    const answer = { Dog: 101 };
    expect(methods.groupByNameTotal(nfts)).toEqual(answer);
  });

  it("테스트케이스 3", () => {
    const nfts = [
      { name: "Dog", price: 501 },
      { name: "Dog", price: 503 },
    ];
    const answer = { Dog: 1004 };
    expect(methods.groupByNameTotal(nfts)).toEqual(answer);
  });

  it("테스트케이스 4", () => {
    const nfts = [];
    const answer = {};
    expect(methods.groupByNameTotal(nfts)).toEqual(answer);
  });
});
