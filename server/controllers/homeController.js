// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    '😎',
    '🗼',
    '😏',
    '☕',
    '🙋‍♂️',
    '👏',
    '🤓',
    '🖤',
    '🎶',
    '🎂',
    '🐱‍👤',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View Models
  const viewModel = {
    title: 'index Controller working!!',
    author: 'Zuriel Román Hernández',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Zuriel Roman',
    email: 'nosystemupload@gmail.com',
    url: 'https:',
    description:
      'Aplicación que te permite registrar ideas de proyectos. PwpcII - 2022A',
    version: '0.0.alpha',
  });
};

export default {
  // Action Method
  index,
  about,
};
