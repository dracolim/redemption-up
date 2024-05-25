db = db.getSiblingDB("jouvire");

db.createCollection("dummies");

const generateRandomText = () => {
  const texts = [
    "Sample text 1",
    "Example text 2",
    "Test text 3",
    "Dummy text 4",
    "Placeholder text 5",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

const generateDummies = (count) => {
  const dummies = [];
  for (let i = 0; i < count; i++) {
    dummies.push({
      text: generateRandomText(),
    });
  }
  return dummies;
};

const dummies = generateDummies(50);

db.dummies.insertMany(dummies);
