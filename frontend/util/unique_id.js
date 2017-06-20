let lastId = 0;

const uniqueId = (prefix = 'id') => {
  lastId++;
  return `${prefix}${lastId}`;
};

export default uniqueId;
