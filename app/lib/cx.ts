export const cx = (...classes: Array<String | boolean | undefined>) => {
  const newClasses = [];
  for (const c of classes) {
    if (typeof c === "string") {
      newClasses.push(c.trim());
    }
  }
  return newClasses.join(" ");
};
