export const classList = (classes: string[]) => {
  let concatenatedString = '';

  classes.forEach((item, i) => {
    if (item && typeof item === 'string') 
      concatenatedString += `${item}${classes.length === i + 1 ? '' : ' '}`;  
  })

  return concatenatedString;
}