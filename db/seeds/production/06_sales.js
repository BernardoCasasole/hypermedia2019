
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sales').insert([
    {month: 4 ,year: 2019, bookid: 1, totalsold: 32},
    {month: 4 ,year: 2019, bookid: 2, totalsold: 113},
    {month: 4 ,year: 2019, bookid: 3, totalsold: 102},
    {month: 4 ,year: 2019, bookid: 4, totalsold: 39},
    {month: 4 ,year: 2019, bookid: 5, totalsold: 66},
    {month: 4 ,year: 2019, bookid: 6, totalsold: 19},
    {month: 4 ,year: 2019, bookid: 7, totalsold: 59},
    {month: 4 ,year: 2019, bookid: 8, totalsold: 79},
    {month: 4 ,year: 2019, bookid: 9, totalsold: 26},
    {month: 4 ,year: 2019, bookid: 10, totalsold: 71},
    {month: 4 ,year: 2019, bookid: 11, totalsold: 87},
    {month: 5 ,year: 2019, bookid: 1, totalsold: 34},
    {month: 5 ,year: 2019, bookid: 2, totalsold: 93},
    {month: 5 ,year: 2019, bookid: 3, totalsold: 112},
    {month: 5 ,year: 2019, bookid: 4, totalsold: 91},
    {month: 5 ,year: 2019, bookid: 5, totalsold: 88},
    {month: 5 ,year: 2019, bookid: 6, totalsold: 32},
    {month: 5 ,year: 2019, bookid: 7, totalsold: 70},
    {month: 5 ,year: 2019, bookid: 8, totalsold: 60},
    {month: 5 ,year: 2019, bookid: 9, totalsold: 77},
    {month: 5 ,year: 2019, bookid: 10, totalsold: 13},
    {month: 5 ,year: 2019, bookid: 11, totalsold: 98},
    {month: 6 ,year: 2019, bookid: 1, totalsold: 119},
    {month: 6 ,year: 2019, bookid: 2, totalsold: 54},
    {month: 6 ,year: 2019, bookid: 3, totalsold: 70},
    {month: 6 ,year: 2019, bookid: 4, totalsold: 84},
    {month: 6 ,year: 2019, bookid: 5, totalsold: 91},
    {month: 6 ,year: 2019, bookid: 6, totalsold: 10},
    {month: 6 ,year: 2019, bookid: 7, totalsold: 111},
    {month: 6 ,year: 2019, bookid: 8, totalsold: 7},
    {month: 6 ,year: 2019, bookid: 9, totalsold: 54},
    {month: 6 ,year: 2019, bookid: 10, totalsold: 19},
    {month: 6 ,year: 2019, bookid: 11, totalsold: 117},
    {month: 6 ,year: 2019, bookid: 12, totalsold: 201},
    {month: 6 ,year: 2019, bookid: 13, totalsold: 18},
    {month: 7 ,year: 2019, bookid: 1, totalsold: 57},
    {month: 7 ,year: 2019, bookid: 2, totalsold: 33},
    {month: 7 ,year: 2019, bookid: 3, totalsold: 109},
    {month: 7 ,year: 2019, bookid: 4, totalsold: 83},
    {month: 7 ,year: 2019, bookid: 5, totalsold: 37},
    {month: 7 ,year: 2019, bookid: 6, totalsold: 28},
    {month: 7 ,year: 2019, bookid: 7, totalsold: 56},
    {month: 7 ,year: 2019, bookid: 8, totalsold: 116},
    {month: 7 ,year: 2019, bookid: 9, totalsold: 15},
    {month: 7 ,year: 2019, bookid: 10, totalsold: 88},
    {month: 7 ,year: 2019, bookid: 11, totalsold: 88},
    {month: 7 ,year: 2019, bookid: 12, totalsold: 20},
    {month: 7 ,year: 2019, bookid: 13, totalsold: 18},
    {month: 8 ,year: 2019, bookid: 1, totalsold: 95},
    {month: 8 ,year: 2019, bookid: 2, totalsold: 91},
    {month: 8 ,year: 2019, bookid: 3, totalsold: 24},
    {month: 8 ,year: 2019, bookid: 4, totalsold: 22},
    {month: 8 ,year: 2019, bookid: 5, totalsold: 83},
    {month: 8 ,year: 2019, bookid: 6, totalsold: 11},
    {month: 8 ,year: 2019, bookid: 7, totalsold: 110},
    {month: 8 ,year: 2019, bookid: 8, totalsold: 42},
    {month: 8 ,year: 2019, bookid: 9, totalsold: 117},
    {month: 8 ,year: 2019, bookid: 10, totalsold: 62},
    {month: 8 ,year: 2019, bookid: 11, totalsold: 22},
    {month: 8 ,year: 2019, bookid: 12, totalsold: 21},
    {month: 8 ,year: 2019, bookid: 13, totalsold: 20},
    {month: 9 ,year: 2019, bookid: 1, totalsold: 32},
    {month: 9 ,year: 2019, bookid: 2, totalsold: 113},
    {month: 9 ,year: 2019, bookid: 3, totalsold: 102},
    {month: 9 ,year: 2019, bookid: 4, totalsold: 39},
    {month: 9 ,year: 2019, bookid: 5, totalsold: 66},
    {month: 9 ,year: 2019, bookid: 6, totalsold: 19},
    {month: 9 ,year: 2019, bookid: 7, totalsold: 59},
    {month: 9 ,year: 2019, bookid: 8, totalsold: 79},
    {month: 9 ,year: 2019, bookid: 9, totalsold: 26},
    {month: 9 ,year: 2019, bookid: 10, totalsold: 71},
    {month: 9 ,year: 2019, bookid: 11, totalsold: 87},
    {month: 9 ,year: 2019, bookid: 12, totalsold: 24},
    {month: 9 ,year: 2019, bookid: 13, totalsold: 21},
    {month: 10 ,year: 2019, bookid: 1, totalsold: 510},
    {month: 10 ,year: 2019, bookid: 2, totalsold: 33},
    {month: 10 ,year: 2019, bookid: 3, totalsold: 109},
    {month: 10 ,year: 2019, bookid: 4, totalsold: 83},
    {month: 10 ,year: 2019, bookid: 5, totalsold: 310},
    {month: 10 ,year: 2019, bookid: 6, totalsold: 28},
    {month: 10 ,year: 2019, bookid: 7, totalsold: 56},
    {month: 10 ,year: 2019, bookid: 8, totalsold: 116},
    {month: 10 ,year: 2019, bookid: 9, totalsold: 15},
    {month: 10 ,year: 2019, bookid: 10, totalsold: 88},
    {month: 10 ,year: 2019, bookid: 11, totalsold: 88},
    {month: 10 ,year: 2019, bookid: 12, totalsold: 20},
    {month: 10 ,year: 2019, bookid: 13, totalsold: 18}
  ]);
};
