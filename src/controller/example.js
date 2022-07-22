import Example from '../models/sequelize/example';

const getExample = async (req, res) => {
  const examples = await Example.findAll();

  res.send(examples);
};

export default getExample;
