// // seeds/seed_candidates_local.js

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex("candidates_local")
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex("candidates_local").insert([
//         { national_id: "6947718237", list_id: 1, district_id: 1 },
//         { national_id: "8767704414", list_id: 1, district_id: 1 },
//         { national_id: "8625591090", list_id: 1, district_id: 1 },
//         { national_id: "6601866733", list_id: 1, district_id: 1 },
//         { national_id: "2565730470", list_id: 1, district_id: 1 },
//         { national_id: "7291805699", list_id: 1, district_id: 1 },
//         { national_id: "1929670071", list_id: 4, district_id: 1 },
//         { national_id: "7938090046", list_id: 4, district_id: 1 },
//         { national_id: "6912933931", list_id: 4, district_id: 1 },
//         { national_id: "3588967808", list_id: 4, district_id: 1 },
//         { national_id: "4558689860", list_id: 4, district_id: 1 },
//         { national_id: "1796260554", list_id: 4, district_id: 1 },
//         { national_id: "1635109387", list_id: 58, district_id: 6 },
//         { national_id: "4592037154", list_id: 58, district_id: 6 },
//         { national_id: "8164329087", list_id: 58, district_id: 6 },
//         { national_id: "5749268130", list_id: 58, district_id: 6 },
//         { national_id: "1672159282", list_id: 58, district_id: 6 },
//         { national_id: "7614908021", list_id: 58, district_id: 6 },
//         { national_id: "9715466221", list_id: 58, district_id: 6 },
//         { national_id: "9860138856", list_id: 58, district_id: 6 },
//         { national_id: "1048699778", list_id: 58, district_id: 6 },
//         { national_id: "2870316498", list_id: 58, district_id: 6 },
//         { national_id: "3429485516", list_id: 57, district_id: 3 },
//         { national_id: "6587519738", list_id: 57, district_id: 3 },
//         { national_id: "8313206448", list_id: 57, district_id: 3 },
//         { national_id: "5647600082", list_id: 57, district_id: 3 },
//         { national_id: "7174989888", list_id: 57, district_id: 3 },
//         { national_id: "8102055000", list_id: 57, district_id: 3 },
//       ]);
//     });
// };
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("candidates_local").del();

  // Inserts seed entries
  await knex("candidates_local").insert([
    {
      national_id: "1635109387",
      list_id: 1, // تأكد من وجود هذا الـ list_id في جدول `lists`
      district_id: 6, // تأكد من وجود هذا الـ district_id في جدول `districts`
      vote_count: 56,
    },
    {
      national_id: "4592037154",
      list_id: 4,
      district_id: 6,
      vote_count: 36,
    },
    {
      national_id: "8164329087",
      list_id: 6,
      district_id: 6,
      vote_count: 38,
    },
    {
      national_id: "5749268130",
      list_id: 9,
      district_id: 6,
      vote_count: 69,
    },
    {
      national_id: "2870316498",
      list_id: 11,
      district_id: 6,
      vote_count: 86,
    },
    {
      national_id: "6325148702",
      list_id: 13,
      district_id: 6,
      vote_count: 74,
    },
    {
      national_id: "1148179138",
      list_id: 2,
      district_id: 1,
      vote_count: 58,
    },
    {
      national_id: "3982922675",
      list_id: 6,
      district_id: 1,
      vote_count: 44,
    },
    {
      national_id: "9085144102",
      list_id: 10,
      district_id: 1,
      vote_count: 58,
    },
    {
      national_id: "7174989888",
      list_id: 12,
      district_id: 3,
      vote_count: 49,
    },
    {
      national_id: "6906327616",
      list_id: 15,
      district_id: 3,
      vote_count: 69,
    },
    {
      national_id: "8102055000",
      list_id: 17,
      district_id: 3,
      vote_count: 59,
    },
    {
      national_id: "7655308212",
      list_id: 18,
      district_id: 6,
      vote_count: 79,
    },
    {
      national_id: "2732804342",
      list_id: 21,
      district_id: 6,
      vote_count: 84,
    },
    {
      national_id: "9763602687",
      list_id: 24,
      district_id: 6,
      vote_count: 58,
    },
    {
      national_id: "2485273807",
      list_id: 27,
      district_id: 6,
      vote_count: 79,
    },
    {
      national_id: "4760633483",
      list_id: 30,
      district_id: 6,
      vote_count: 58,
    },
    {
      national_id: "4748932096",
      list_id: 33,
      district_id: 6,
      vote_count: 79,
    },
    {
      national_id: "1406991627",
      list_id: 36,
      district_id: 6,
      vote_count: 47,
    },
    {
      national_id: "9732422972",
      list_id: 39,
      district_id: 6,
      vote_count: 0,
    },
    {
      national_id: "7978975300",
      list_id: 42,
      district_id: 6,
      vote_count: 111,
    },
    {
      national_id: "4278883896",
      list_id: 45,
      district_id: 6,
      vote_count: 102,
    },
    {
      national_id: "5788961262",
      list_id: 48,
      district_id: 6,
      vote_count: 74,
    },
    // --------------------------------------------------------------
    {
      national_id: "6520719287",
      list_id: 49,
      district_id: 6,
      vote_count: 50,
    },
    {
      national_id: "7304146142",
      list_id: 49,
      district_id: 6,
      vote_count: 57,
    },
    {
      national_id: "8625591090",
      list_id: 49,
      district_id: 6,
      vote_count: 90,
    },
    {
      national_id: "7359678775",
      list_id: 49,
      district_id: 6,
      vote_count: 85,
    },
    {
      national_id: "3145841888",
      list_id: 49,
      district_id: 6,
      vote_count: 125,
    },
    {
      national_id: "6518258652",
      list_id: 49,
      district_id: 6,
      vote_count: 111,
    },
    // --------------------------------------
    {
      national_id: "1994479851",
      list_id: 50,
      district_id: 6,
      vote_count: 68,
    },
    {
      national_id: "8313206448",
      list_id: 50,
      district_id: 6,
      vote_count: 79,
    },
    {
      national_id: "3124960690",
      list_id: 50,
      district_id: 6,
      vote_count: 49,
    },
    {
      national_id: "4801558871",
      list_id: 50,
      district_id: 6,
      vote_count: 59,
    },
    {
      national_id: "7281002623",
      list_id: 50,
      district_id: 6,
      vote_count: 123,
    },
    // -------------------------------------

    {
      national_id: "7552330613",
      list_id: 51,
      district_id: 6,
      vote_count: 310,
    },
    {
      national_id: "6912933931",
      list_id: 51,
      district_id: 6,
      vote_count: 113,
    },
    {
      national_id: "8767704414",
      list_id: 51,
      district_id: 6,
      vote_count: 47,
    },
    // -----------------------------------------
    {
      national_id: "1351724025",
      list_id: 52,
      district_id: 6,
      vote_count: 85,
    },
    {
      national_id: "7281002623",
      list_id: 52,
      district_id: 6,
      vote_count: 119,
    },
    {
      national_id: "8625591090",
      list_id: 52,
      district_id: 6,
      vote_count: 40,
    },
    {
      national_id: "6912933931",
      list_id: 52,
      district_id: 6,
      vote_count: 32,
    },
    // -----------------------------------------
    {
      national_id: "6892007465",
      list_id: 53,
      district_id: 6,
      vote_count: 83,
    },
    {
      national_id: "5650607368",
      list_id: 53,
      district_id: 6,
      vote_count: 57,
    },
    {
      national_id: "1816125870",
      list_id: 53,
      district_id: 6,
      vote_count: 83,
    },
    {
      national_id: "1796260554",
      list_id: 53,
      district_id: 6,
      vote_count: 58,
    },
    // -----------------------------------------
    {
      national_id: "9715466221",
      list_id: 54,
      district_id: 6,
      vote_count: 75,
    },
    {
      national_id: "9085144102",
      list_id: 54,
      district_id: 6,
      vote_count: 92,
    },
    {
      national_id: "4600911396",
      list_id: 54,
      district_id: 6,
      vote_count: 47,
    },
    {
      national_id: "8029584141",
      list_id: 54,
      district_id: 6,
      vote_count: 68,
    },
    // -------------------------------------
    {
      national_id: "5647600082",
      list_id: 55,
      district_id: 6,
      vote_count: 73,
    },
    {
      national_id: "6520719287",
      list_id: 55,
      district_id: 6,
      vote_count: 69,
    },
    {
      national_id: "9675553799",
      list_id: 55,
      district_id: 6,
      vote_count: 59,
    },
    {
      national_id: "2565730470",
      list_id: 55,
      district_id: 6,
      vote_count: 75,
    },
    // -------------------------------------
    {
      national_id: "5296790538",
      list_id: 56,
      district_id: 6,
      vote_count: 110,
    },
    {
      national_id: "5206113979",
      list_id: 56,
      district_id: 6,
      vote_count: 68,
    },
    {
      national_id: "6601866733",
      list_id: 56,
      district_id: 6,
      vote_count: 87,
    },
    {
      national_id: "9763602687",
      list_id: 56,
      district_id: 6,
      vote_count: 59,
    },
    // ---------------------------------------
    {
      national_id: "9904934651",
      list_id: 57,
      district_id: 6,
      vote_count: 83,
    },
    {
      national_id: "2485273807",
      list_id: 57,
      district_id: 6,
      vote_count: 58,
    },
    {
      national_id: "1929670071",
      list_id: 57,
      district_id: 6,
      vote_count: 95,
    },
    {
      national_id: "9715466221",
      list_id: 57,
      district_id: 6,
      vote_count: 84,
    },
    // -----------------------------------------
    {
      national_id: "1358645139",
      list_id: 58,
      district_id: 6,
      vote_count: 68,
    },
    {
      national_id: "7805460626",
      list_id: 58,
      district_id: 6,
      vote_count: 79,
    },
    {
      national_id: "4141337323",
      list_id: 58,
      district_id: 6,
      vote_count: 73,
    },
  ]);
};