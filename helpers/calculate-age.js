module.exports = function(isoDateString) {
  const birthday = new Date(isoDateString);
  const today = new Date();
  const differenceInTime = today.getTime() - birthday.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const ageInMonths = parseInt(differenceInDays / 30, 10);
  const ageInYears = parseInt(ageInMonths / 12, 10);

  if (ageInMonths === 0) {
    // If less than 1 month old return `x weeks` or `1 week`
    const weeks = parseInt(differenceInDays / 7, 10);
    return weeks > 1 ? `${weeks} weeks` : `${weeks} week`;
  } else if (ageInMonths <= 23) {
    // If less than 2 years old return `x months` or `1 month`
    return ageInMonths > 1 ? `${ageInMonths} months` : `${ageInMonths} month`;
  } else {
    // If two years old or older return age in years
    return ageInYears + ' years';
  }
};
