export const wait = async (seconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
};
