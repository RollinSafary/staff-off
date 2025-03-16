export const mergeToObject = <O>(originalObject: O, update: Partial<O>) => {
  type KeyO = keyof O;
  const keys: KeyO[] = Object.keys(update) as KeyO[];
  for (const key of keys) {
    if (update[key] !== undefined) {
      originalObject[key] = update[key];
    }
  }
};
