export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  course: string;
  semester: string;
  date: string;
  notionUrl: string;
};

export const blogPosts: BlogPost[] = [
  // Spring 2026 — APM
  { id: "2f4a0a66-5b03-80ab-977e-ce8424f8647b", slug: "apm-week-1", title: "APM Week 1", course: "APM", semester: "Spring 2026", date: "2026-01-26", notionUrl: "https://www.notion.so/2f4a0a665b0380ab977ece8424f8647b" },
  { id: "2f5a0a66-5b03-8019-9cd4-c41ed965eddd", slug: "apm-week-2", title: "APM Week 2", course: "APM", semester: "Spring 2026", date: "2026-01-27", notionUrl: "https://www.notion.so/2f5a0a665b0380199cd4c41ed965eddd" },
  { id: "2fda0a66-5b03-80e7-a490-c292ef166dbc", slug: "apm-week-3", title: "APM Week 3: World Building", course: "APM", semester: "Spring 2026", date: "2026-02-04", notionUrl: "https://www.notion.so/2fda0a665b0380e7a490c292ef166dbc" },
  { id: "303a0a66-5b03-806f-8a15-cfc50b3ad5eb", slug: "apm-week-4", title: "Week 4", course: "APM", semester: "Spring 2026", date: "2026-02-10", notionUrl: "https://www.notion.so/303a0a665b03806f8a15cfc50b3ad5eb" },

  // Spring 2026 — Programming for Data
  { id: "2fba0a66-5b03-80be-aa20-cff948eec1e5", slug: "progdata-week-1", title: "Week 1", course: "Programming for Data", semester: "Spring 2026", date: "2026-02-02", notionUrl: "https://www.notion.so/2fba0a665b0380beaa20cff948eec1e5" },
  { id: "2fca0a66-5b03-8084-ac5d-f36aba6d5ede", slug: "progdata-week-2", title: "Week 2", course: "Programming for Data", semester: "Spring 2026", date: "2026-02-03", notionUrl: "https://www.notion.so/2fca0a665b038084ac5df36aba6d5ede" },
  { id: "302a0a66-5b03-80b0-a125-ead0159ad1b0", slug: "progdata-week-3", title: "Week 3", course: "Programming for Data", semester: "Spring 2026", date: "2026-02-09", notionUrl: "https://www.notion.so/302a0a665b0380b0a125ead0159ad1b0" },
  { id: "30aa0a66-5b03-80a9-982c-c80feec38c26", slug: "progdata-week-4", title: "Week 4", course: "Programming for Data", semester: "Spring 2026", date: "2026-02-17", notionUrl: "https://www.notion.so/30aa0a665b0380a9982cc80feec38c26" },

  // Fall 2025 — Projection Mapping
  { id: "26aa0a66-5b03-8011-9207-f51b5ca23a80", slug: "pm-week-1", title: "Week 1", course: "Projection Mapping", semester: "Fall 2025", date: "2025-09-10", notionUrl: "https://www.notion.so/26aa0a665b0380119207f51b5ca23a80" },
  { id: "270a0a66-5b03-8046-89c8-d70689896215", slug: "pm-week-2", title: "Week 2", course: "Projection Mapping", semester: "Fall 2025", date: "2025-09-16", notionUrl: "https://www.notion.so/270a0a665b03804689c8d70689896215" },
  { id: "277a0a66-5b03-808f-a368-d5b1037b6be3", slug: "pm-week-3", title: "Week 3", course: "Projection Mapping", semester: "Fall 2025", date: "2025-09-23", notionUrl: "https://www.notion.so/277a0a665b03808fa368d5b1037b6be3" },
  { id: "27ea0a66-5b03-8070-be6f-eeb10b6014b7", slug: "pm-week-4", title: "Week 4", course: "Projection Mapping", semester: "Fall 2025", date: "2025-09-30", notionUrl: "https://www.notion.so/27ea0a665b038070be6feeb10b6014b7" },
  { id: "284a0a66-5b03-80cd-bc9b-ca00d6352df7", slug: "pm-week-5", title: "Week 5", course: "Projection Mapping", semester: "Fall 2025", date: "2025-10-06", notionUrl: "https://www.notion.so/284a0a665b0380cdbc9bca00d6352df7" },
  { id: "2dfa0a66-5b03-80a8-9bb5-f09e7a48853c", slug: "pm-week-6", title: "Week 6", course: "Projection Mapping", semester: "Fall 2025", date: "2025-10-14", notionUrl: "https://www.notion.so/2dfa0a665b0380a89bb5f09e7a48853c" },
  { id: "293a0a66-5b03-800a-b2c7-f4a5d3a94f20", slug: "pm-week-7", title: "Week 7", course: "Projection Mapping", semester: "Fall 2025", date: "2025-10-21", notionUrl: "https://www.notion.so/293a0a665b03800ab2c7f4a5d3a94f20" },

  // Fall 2025 — Game Modifications
  { id: "26ba0a66-5b03-805d-8d96-ea1093c0c391", slug: "game-week-1", title: "Week 1: Chess Mod", course: "Game Modifications", semester: "Fall 2025", date: "2025-09-11", notionUrl: "https://www.notion.so/26ba0a665b03805d8d96ea1093c0c391" },
  { id: "26ba0a66-5b03-8002-8dfe-f1020630fb33", slug: "game-week-2", title: "Week 2:", course: "Game Modifications", semester: "Fall 2025", date: "2025-09-11", notionUrl: "https://www.notion.so/26ba0a665b0380028dfef1020630fb33" },
  { id: "278a0a66-5b03-8073-aef3-ea684e0377d2", slug: "game-week-3", title: "Week 3", course: "Game Modifications", semester: "Fall 2025", date: "2025-09-24", notionUrl: "https://www.notion.so/278a0a665b038073aef3ea684e0377d2" },
  { id: "28fa0a66-5b03-8081-8c18-c4fe20f70c6e", slug: "game-go-fish", title: "Go Fish Mod", course: "Game Modifications", semester: "Fall 2025", date: "2025-10-17", notionUrl: "https://www.notion.so/28fa0a665b0380818c18c4fe20f70c6e" },

  // Fall 2025 — ITP Thesis
  { id: "277a0a66-5b03-80e5-91cd-d07e5a9db2a7", slug: "thesis-update-1", title: "Progress Update 1 [09/21]", course: "ITP Thesis", semester: "Fall 2025", date: "2025-09-23", notionUrl: "https://www.notion.so/277a0a665b0380e591cdd07e5a9db2a7" },
  { id: "284a0a66-5b03-80f0-bc8a-c2eac6c0016b", slug: "thesis-update-2", title: "Progress Update 2 [10/05]", course: "ITP Thesis", semester: "Fall 2025", date: "2025-10-06", notionUrl: "https://www.notion.so/284a0a665b0380f0bc8ac2eac6c0016b" },
  { id: "2aca0a66-5b03-80b1-ab39-f14b061d16f2", slug: "thesis-update-5", title: "Progress Update 5 [11/16]", course: "ITP Thesis", semester: "Fall 2025", date: "2025-11-15", notionUrl: "https://www.notion.so/2aca0a665b0380b1ab39f14b061d16f2" },
  { id: "312a0a66-5b03-8016-923d-d867c01aa56e", slug: "thesis-user-testing", title: "user testing", course: "ITP Thesis", semester: "Fall 2025", date: "2026-02-25", notionUrl: "https://www.notion.so/312a0a665b038016923dd867c01aa56e" },

  // Spring 2025 — Modalities of AR
  { id: "18fa0a66-5b03-802a-9ad5-ffe745b75c77", slug: "ar-week-1", title: "Week 1-LoFi AR", course: "Modalities of AR", semester: "Spring 2025", date: "2025-02-03", notionUrl: "https://www.notion.so/18fa0a665b03802a9ad5ffe745b75c77" },
  { id: "19ea0a66-5b03-80c6-947b-d58bfca3890a", slug: "ar-week-3", title: "Week 3-Image", course: "Modalities of AR", semester: "Spring 2025", date: "2025-02-18", notionUrl: "https://www.notion.so/19ea0a665b0380c6947bd58bfca3890a" },
  { id: "1a4a0a66-5b03-8023-b26e-e3c66e722580", slug: "ar-week-4", title: "Week 4: Body", course: "Modalities of AR", semester: "Spring 2025", date: "2025-02-24", notionUrl: "https://www.notion.so/1a4a0a665b038023b26ee3c66e722580" },
  { id: "1aba0a66-5b03-80b3-95ac-c499268b218e", slug: "ar-week-5", title: "Week 5: Environment", course: "Modalities of AR", semester: "Spring 2025", date: "2025-03-03", notionUrl: "https://www.notion.so/1aba0a665b0380b395acc499268b218e" },
  { id: "1b2a0a66-5b03-807c-bf27-f77569641010", slug: "ar-week-7", title: "Week 7 : Final Project", course: "Modalities of AR", semester: "Spring 2025", date: "2025-03-10", notionUrl: "https://www.notion.so/1b2a0a665b03807cbf27f77569641010" },

  // Spring 2025 — Code Your Way
  { id: "188a0a66-5b03-80e3-afef-eadc8798b525", slug: "cyw-week-1", title: "Week 1", course: "Code Your Way", semester: "Spring 2025", date: "2025-01-27", notionUrl: "https://www.notion.so/188a0a665b0380e3afefeadc8798b525" },
  { id: "195a0a66-5b03-80f8-bcbc-c35380f7be29", slug: "cyw-week-2", title: "Week 2", course: "Code Your Way", semester: "Spring 2025", date: "2025-02-09", notionUrl: "https://www.notion.so/195a0a665b0380f8bcbcc35380f7be29" },
  { id: "19ba0a66-5b03-80d2-b1cf-ce22b84318ba", slug: "cyw-week-3", title: "Week 3", course: "Code Your Way", semester: "Spring 2025", date: "2025-02-15", notionUrl: "https://www.notion.so/19ba0a665b0380d2b1cfce22b84318ba" },
  { id: "1aba0a66-5b03-80ee-84bd-d65aa1c96660", slug: "cyw-week-5", title: "Week 5", course: "Code Your Way", semester: "Spring 2025", date: "2025-03-03", notionUrl: "https://www.notion.so/1aba0a665b0380ee84bdd65aa1c96660" },
  { id: "1b2a0a66-5b03-805f-ad38-e3aa18f5c2a3", slug: "cyw-week-6", title: "Week 6", course: "Code Your Way", semester: "Spring 2025", date: "2025-03-10", notionUrl: "https://www.notion.so/1b2a0a665b03805fad38e3aa18f5c2a3" },
  { id: "1b9a0a66-5b03-80a2-9f1f-e5b58dd35779", slug: "cyw-week-7", title: "Week 7", course: "Code Your Way", semester: "Spring 2025", date: "2025-03-17", notionUrl: "https://www.notion.so/1b9a0a665b0380a29f1fe5b58dd35779" },
  { id: "1c7a0a66-5b03-8052-bf66-c7c235e93482", slug: "cyw-week-8", title: "Week 8", course: "Code Your Way", semester: "Spring 2025", date: "2025-03-31", notionUrl: "https://www.notion.so/1c7a0a665b038052bf66c7c235e93482" },
  { id: "1cea0a66-5b03-8033-9cd2-fa347a9035ec", slug: "cyw-week-9", title: "Week 9", course: "Code Your Way", semester: "Spring 2025", date: "2025-04-07", notionUrl: "https://www.notion.so/1cea0a665b0380339cd2fa347a9035ec" },
  { id: "1d5a0a66-5b03-80df-a20e-e76336c762db", slug: "cyw-week-10", title: "Week 10", course: "Code Your Way", semester: "Spring 2025", date: "2025-04-14", notionUrl: "https://www.notion.so/1d5a0a665b0380dfa20ee76336c762db" },
  { id: "1dba0a66-5b03-807a-ab9e-c26ddc48dc7c", slug: "cyw-week-11", title: "Week 11", course: "Code Your Way", semester: "Spring 2025", date: "2025-04-20", notionUrl: "https://www.notion.so/1dba0a665b03807aab9ec26ddc48dc7c" },
  { id: "1eaa0a66-5b03-808e-a34a-e35aede0a904", slug: "cyw-week-13", title: "Week 13: Final", course: "Code Your Way", semester: "Spring 2025", date: "2025-05-05", notionUrl: "https://www.notion.so/1eaa0a665b03808ea34ae35aede0a904" },

  // Spring 2025 — Big LEDs
  { id: "1b4a0a66-5b03-806c-a7a2-c9684049ed5e", slug: "leds-week-1", title: "Week 1", course: "Big LEDs", semester: "Spring 2025", date: "2025-03-12", notionUrl: "https://www.notion.so/1b4a0a665b03806ca7a2c9684049ed5e" },
  { id: "1bba0a66-5b03-80b1-abc5-e3577ee72f8e", slug: "leds-week-2", title: "Week 2", course: "Big LEDs", semester: "Spring 2025", date: "2025-03-19", notionUrl: "https://www.notion.so/1bba0a665b0380b1abc5e3577ee72f8e" },
  { id: "1c9a0a66-5b03-8082-9dc5-dc9d938be342", slug: "leds-week-3", title: "Week 3", course: "Big LEDs", semester: "Spring 2025", date: "2025-04-02", notionUrl: "https://www.notion.so/1c9a0a665b0380829dc5dc9d938be342" },
  { id: "1f6a0a66-5b03-806f-968a-f6c662dfd652", slug: "leds-final", title: "Final", course: "Big LEDs", semester: "Spring 2025", date: "2025-05-17", notionUrl: "https://www.notion.so/1f6a0a665b03806f968af6c662dfd652" },
];

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const SEMESTERS = ["Spring 2026", "Fall 2025", "Spring 2025"] as const;
