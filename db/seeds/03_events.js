
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('events').insert([
        {eid: 1, author: 4, eventname:'The main geopolitical events and trends', presentedBook: 4, date:'2019/6/3', subscribers:12,
        details: 'Mexico making a bid for global supremacy? Poland becoming America\'s closest ally? World War III taking place in space? It might sound fantastic but all these things can happen. In "The Next 100 Years", George Friedman, author of the huge bestseller "America\'s Secret War" offers a lucid, highly readable forecast of the changes we can expect around the world during the 21st century. \n \n He predicts where and why future wars will erupt, and how they will be fought; which nations will gain and lose economic and political power;and how new technologies and cultural trends will alter the way we live in the new century.'},

        {eid: 2, author: 7, eventname:'What the Rich Teach Their Kids About Money', presentedBook: 7, date:'2019/6/19', subscribers:2, 
        details: 'Rich Dad Poor Dad is Robert\'s story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you. \n \n In the 20th Anniversary Edition of this classic, Robert offers an update on what we’ve seen over the past 20 years related to money, investing, and the global economy. Sidebars throughout the book will take readers “fast forward” — from 1997 to today — as Robert assesses how the principles taught by his rich dad have stood the test of time. In many ways, the messages of Rich Dad Poor Dad, messages that were criticized and challenged two decades ago, are more meaningful, relevant and important today than they were 20 years ago. As always, readers can expect that Robert will be candid, insightful... and continue to rock more than a few boats in his retrospective. Will there be a few surprises? Count on it. '},

        {eid: 3, author: 11, eventname:'Ten Maps - Everything About Global Politics', presentedBook: 11, date:'2019/7/7', subscribers:120, 
        details: 'All leaders are constrained by geography. Their choices are limited by mountains, rivers, seas and concrete. Yes, to follow world events you need to understand people, ideas and movements – but if you don’t know geography, you’ll never have the full picture. If you’ve ever wondered why Putin is so obsessed with Crimea, why the USA was destined to become a global superpower, or why China’s power base continues to expand ever outwards, the answers are all here. \n \n In ten chapters (covering Russia; China; the USA; Latin America; the Middle East; Africa; India and Pakistan; Europe; Japan and Korea; and the Arctic), using maps, essays and occasionally the personal experiences of the widely travelled author, Prisoners of Geography looks at the past, present and future to offer an essential insight into one of the major factors that determines world history. '},

        {eid: 4, author: 10, eventname:'Educated:A Memoir, story of desire for education and autonomy', presentedBook: 10, date:'2019/6/5', subscribers:120,
        details: 'Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes from severing one\'s closest ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one\'s life through new eyes, and the will to change it. \n \n Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her "head-for-the-hills" bag. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged metal in her father\'s junkyard. Her father distrusted the medical establishment, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when an older brother became violent. When another brother got himself into college and came back with news of the world beyond the mountain, Tara decided to try a new kind of life. She taught herself enough mathematics, grammar, and science to take the ACT and was admitted to Brigham Young University. There, she studied psychology, politics, philosophy, and history, learning for the first time about pivotal world events like the Holocaust and the Civil Rights Movement. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home.'},

        {eid: 5, author: 8, eventname:'Female narration - The Testament', presentedBook: 8, date:'2019/8/20', subscribers:120, 
        details: 'In this brilliant sequel to The Handmaid\'s Tale, acclaimed author Margaret Atwood answers the questions that have tantalized readers for decades. When the van door slammed on Offred\'s future at the end of The Handmaid\'s Tale, readers had no way of telling what lay ahead. With The Testaments, the wait is over. \n \n Margaret Atwood\'s sequel picks up the story fifteen years after Offred stepped into the unknown, with the explosive testaments of three female narrators from Gilead. "Dear Readers: Everything you\'ve ever asked me about Gilead and its inner workings is the inspiration for this book. Well, almost everything! The other inspiration is the world we\'ve been living in." —Margaret Atwood'}

      ]);
};
