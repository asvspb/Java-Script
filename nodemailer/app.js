

const getRandomFloat = function(from, to, decimal) {
    const random = Math.random() * ( to - from) + from;
    return Number(random.toFixed(decimal));
};
export { getRandomFloat };