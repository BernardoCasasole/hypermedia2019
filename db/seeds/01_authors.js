
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, name:'Michelle Obama', description: 'Michelle LaVaughn Obama is an American lawyer, university administrator and writer, who was First Lady of the United States from 2009 to 2017. She is married to the 44th U.S. president, Barack Obama, and was the first African-American first lady.'},
        {id: 2, name: 'Tracy Chevalier', description: 'Tracy Chevalier is an American-British historical novelist. She has written eight novels. She is best known for her second novel, Girl with a Pearl Earring, which was adapted as a 2003 film starring Scarlett Johansson and Colin Firth. '},
        {id: 3, name: 'George Friedman', description: 'George Friedman is a Hungarian-born U.S. geopolitical forecaster, and strategist on international affairs. He is the founder and chairman of Geopolitical Futures, an online publication that analyzes and forecasts the course of global events. '},
        {id: 4, name: 'George Martin', description: 'George R. R. Martin is an American novelist and short story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones.'},
        {id: 5, name: 'Antonio Tabucchi', description: 'Antonio Tabucchi was an Italian writer and academic who taught Portuguese language and literature at the University of Siena, Italy. In later life he was mentioned as a contender for the Nobel Prize in Literature, a feat he never achieved.'},
        {id: 6, name: 'Robert Kiyosaki', description: 'Robert Kiyosaki is an American businessman and author. Kiyosaki is the founder of Rich Global LLC and the Rich Dad Company, a private financial education company that provides personal finance and business education to people through books and videos.'},
        {id: 7, name: 'Margaret Atwood', description: 'Margaret Atwood is a Canadian poet, novelist, literary critic, essayist, inventor, teacher, and environmental activist. Atwood is also the inventor and developer of the LongPen and associated technologies that facilitate the remote robotic writing of documents.' },
        {id: 8, name: 'Rachel Hollis', description: 'Rachel Hollis is an American author, motivational speaker and blogger. Her self-help book Girl, Wash Your Face—since its release in February 2018—has maintained a spot in the top 10 best-selling books in the country for seven months.'},
        {id: 9, name: 'Tara Westover', description: 'Tara Westover is an American memoirist, essayist and historian. Her memoir Educated debuted at #1 on the New York Times bestseller list and was a finalist for a number of national awards.'},
        {id: 10, name: 'Tim Marshall', description: 'Tim Marshall is a British journalist, author and broadcaster, known for his analysis of developments in foreign news and international diplomacy. Marshall is a guest commentator on world events for the BBC,[1] Sky News and a guest presenter on LBC.'},
        {id: 11, name: 'Ernest Hemingway', description: 'Ernest Hemingway was an American journalist, novelist, short-story writer, and noted sportsman. Many of his works are considered classics of American literature. '},
      ]);
    });
};
