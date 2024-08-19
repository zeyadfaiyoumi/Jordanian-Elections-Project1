// seeds/seed_candidates_local.js

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("candidates_local")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("candidates_local").insert([
        { national_id: "6947718237", list_id: 1, district_id: 1 },
        { national_id: "8767704414", list_id: 1, district_id: 1 },
        { national_id: "8625591090", list_id: 1, district_id: 1 },
        { national_id: "6601866733", list_id: 1, district_id: 1 },
        { national_id: "2565730470", list_id: 1, district_id: 1 },
        { national_id: "7291805699", list_id: 1, district_id: 1 },
        { national_id: "1929670071", list_id: 4, district_id: 1 },
        { national_id: "7938090046", list_id: 4, district_id: 1 },
        { national_id: "6912933931", list_id: 4, district_id: 1 },
        { national_id: "3588967808", list_id: 4, district_id: 1 },
        { national_id: "4558689860", list_id: 4, district_id: 1 },
        { national_id: "1796260554", list_id: 4, district_id: 1 },
        { national_id: "1635109387", list_id: 58, district_id: 6 },
        { national_id: "4592037154", list_id: 58, district_id: 6 },
        { national_id: "8164329087", list_id: 58, district_id: 6 },
        { national_id: "5749268130", list_id: 58, district_id: 6 },
        { national_id: "1672159282", list_id: 58, district_id: 6 },
        { national_id: "7614908021", list_id: 58, district_id: 6 },
        { national_id: "9715466221", list_id: 58, district_id: 6 },
        { national_id: "9860138856", list_id: 58, district_id: 6 },
        { national_id: "1048699778", list_id: 58, district_id: 6 },
        { national_id: "2870316498", list_id: 58, district_id: 6 },
        { national_id: "3429485516", list_id: 57, district_id: 3 },
        { national_id: "6587519738", list_id: 57, district_id: 3 },
        { national_id: "8313206448", list_id: 57, district_id: 3 },
        { national_id: "5647600082", list_id: 57, district_id: 3 },
        { national_id: "7174989888", list_id: 57, district_id: 3 },
        { national_id: "8102055000", list_id: 57, district_id: 3 },
      ]);
    });
};
