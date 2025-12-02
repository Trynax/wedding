export const wishlistItems = [
  {
    id: 1,
    name: "Play station 5",
    price: 895000,
    buyOnlineUrl: "#"
  },
  {
    id: 2,
    name: "Play station 5",
    price: 895000,
    buyOnlineUrl: "#"
  },
  {
    id: 3,
    name: "Play station 5",
    price: 895000,
    buyOnlineUrl: "#"
  },
  {
    id: 4,
    name: "Play station 5",
    price: 895000,
    buyOnlineUrl: "#"
  }
];

export function formatPrice(price) {
  return `₦ ${price.toLocaleString('en-NG')}`;
}
