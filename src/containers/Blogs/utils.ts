export const getFirstImgSrc = (htmlString: string) => {
  const regex = /<img.*?src=["'](.*?)["']/;
  const match = regex.exec(htmlString);

  return match?.[1] || "";
};
