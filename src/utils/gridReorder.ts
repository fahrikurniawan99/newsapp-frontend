export const gridReorder = (parentIndex: number, childIndex: number) => {
  const isEvens = parentIndex % 2 !== 0;
  if (isEvens) {
    switch (childIndex) {
      case 0:
        return "order-3";
      case 3:
        return "order-5";
      case 4:
        return "order-6";
      default:
        return "order-none";
    }
  }
};
