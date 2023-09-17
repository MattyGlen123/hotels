export const classList = (classes: string[]) => {
  let concatenatedString = '';

  classes.forEach(item => {
    if (typeof item === 'string')
      concatenatedString += `${item} `;
  })

  return concatenatedString;
}