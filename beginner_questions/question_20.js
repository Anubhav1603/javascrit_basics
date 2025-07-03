// Determine eligibility to vote.

const vote_eligibility = (age) => {
  if (age >= 18) {
    return "Can vote";
  } else {
    return "Not eligible to vote";
  }
};
console.log(vote_eligibility(17));
