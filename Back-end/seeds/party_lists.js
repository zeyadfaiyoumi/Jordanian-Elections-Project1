/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("party_lists").del();

  // Inserts seed entries
  await knex("party_lists").insert([
    {
      party_name: "حزب البعث العربي الاشتراكي",
      vote_count: 0,
      logo: "نسعى إلى إعادة بناء الأمة",
    },
    { party_name: "حزب الوسط الإسلامي", vote_count: 0, logo: "الوحدة والتقدم" },
    {
      party_name: "حزب الجبهة الأردنية الموحدة",
      vote_count: 0,
      logo: "الأردن أولاً",
    },
    { party_name: "حزب الديمقراطيون", vote_count: 0, logo: "الشعب هو الأساس" },
    {
      party_name: "حزب العدالة والتنمية",
      vote_count: 0,
      logo: "عدالة حقيقية لتنمية مستدامة",
    },
    {
      party_name: "حزب الشعب الديمقراطي",
      vote_count: 0,
      logo: "صوت الشعب في التنمية",
    },
    {
      party_name: "حزب التجمع الوطني",
      vote_count: 0,
      logo: "معاً من أجل الوطن",
    },
    { party_name: "حزب الحياة", vote_count: 0, logo: "حياة كريمة لكل مواطن" },
    {
      party_name: "حزب الإصلاح",
      vote_count: 0,
      logo: "إصلاح شامل لتقدم الوطن",
    },
    {
      party_name: "حزب التغيير",
      vote_count: 0,
      logo: "تغيير إيجابي لأجل المستقبل",
    },
    {
      party_name: "حزب التقدم",
      vote_count: 0,
      logo: "التقدم من أجل الأجيال القادمة",
    },
    { party_name: "حزب الأمل", vote_count: 0, logo: "الأمل في غدٍ أفضل" },
    { party_name: "حزب السلام", vote_count: 0, logo: "السلام والتنمية للجميع" },
    { party_name: "حزب الوفاء", vote_count: 0, logo: "وفاء للوطن والشعب" },
    {
      party_name: "حزب المستقبل",
      vote_count: 0,
      logo: "بناء المستقبل بيدٍ واحدة",
    },
    {
      party_name: "حزب النهوض",
      vote_count: 0,
      logo: "نهوض للأمام برؤية واضحة",
    },
    { party_name: "حزب الوحدة", vote_count: 0, logo: "الوحدة في التنوع" },
    {
      party_name: "حزب الوطنيين",
      vote_count: 0,
      logo: "الوطنيون يعملون لأجل الوطن",
    },
    { party_name: "حزب النهضة", vote_count: 0, logo: "نهضة الوطن ببسالة" },
    { party_name: "حزب العدالة", vote_count: 0, logo: "العدالة أساس المجتمع" },
    {
      party_name: "حزب النهضة الجديدة",
      vote_count: 0,
      logo: "نهضة جديدة لمستقبل أفضل",
    },
  ]);
};
