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

  // Fall 2025 — Fabricating Mechanical Automatons
  { id: "26ba0a66-5b03-8091-b67e-da1d0309ce2e", slug: "fab-week-1", title: "Week 1", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-09-11", notionUrl: "https://www.notion.so/26ba0a665b038091b67eda1d0309ce2e" },
  { id: "272a0a66-5b03-808c-9dfa-f4fddd6339a2", slug: "fab-week-2", title: "Week 2", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-09-18", notionUrl: "https://www.notion.so/272a0a665b03808c9dfaf4fddd6339a2" },
  { id: "279a0a66-5b03-8062-b434-ec69eed93aae", slug: "fab-week-3", title: "Week 3", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-09-25", notionUrl: "https://www.notion.so/279a0a665b038062b434ec69eed93aae" },
  { id: "284a0a66-5b03-8061-a8b5-f3eac3e4ef01", slug: "fab-week-5", title: "Week 5", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-10-06", notionUrl: "https://www.notion.so/284a0a665b038061a8b5f3eac3e4ef01" },
  { id: "28ea0a66-5b03-8047-a3c2-da5b87687e52", slug: "fab-midterm", title: "Midterm- Navagunjara", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-10-16", notionUrl: "https://www.notion.so/28ea0a665b038047a3c2da5b87687e52" },
  { id: "29ca0a66-5b03-8026-babc-f35270d121ef", slug: "fab-week-7", title: "Week 7: Final Proposal", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-10-30", notionUrl: "https://www.notion.so/29ca0a665b038026babcf35270d121ef" },
  { id: "2a3a0a66-5b03-8026-9c52-f04053231535", slug: "fab-week-9", title: "Week 9", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-11-06", notionUrl: "https://www.notion.so/2a3a0a665b0380269c52f04053231535" },
  { id: "2aaa0a66-5b03-80a0-9a59-c088fdbf17dd", slug: "fab-week-10", title: "Week 10", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-11-13", notionUrl: "https://www.notion.so/2aaa0a665b0380a09a59c088fdbf17dd" },
  { id: "2aba0a66-5b03-80f0-aba3-ddf299a97136", slug: "fab-final", title: "Final", course: "Fabricating Mechanical Automatons", semester: "Fall 2025", date: "2025-11-14", notionUrl: "https://www.notion.so/2aba0a665b0380f0aba3ddf299a97136" },

  // Fall 2025 — Production Studio Seminar
  { id: "26aa0a66-5b03-8053-896a-f487df5b5bcb", slug: "pss-week-1", title: "Week 1 - Podcast", course: "Production Studio Seminar", semester: "Fall 2025", date: "2025-09-10", notionUrl: "https://www.notion.so/26aa0a665b038053896af487df5b5bcb" },
  { id: "271a0a66-5b03-80a7-98ee-d737834bd7ea", slug: "pss-week-2", title: "Week 2", course: "Production Studio Seminar", semester: "Fall 2025", date: "2025-09-17", notionUrl: "https://www.notion.so/271a0a665b0380a798eed737834bd7ea" },
  { id: "278a0a66-5b03-8056-adf1-f50807b68a26", slug: "pss-week-3", title: "Week 3", course: "Production Studio Seminar", semester: "Fall 2025", date: "2025-09-24", notionUrl: "https://www.notion.so/278a0a665b038056adf1f50807b68a26" },
  { id: "2a9a0a66-5b03-80c8-a843-dec099958df5", slug: "pss-final", title: "Final Project: Oopsitopia", course: "Production Studio Seminar", semester: "Fall 2025", date: "2025-11-12", notionUrl: "https://www.notion.so/2a9a0a665b0380c8a843dec099958df5" },

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

  // Spring 2025 — Biophilic Experiences
  { id: "185a0a66-5b03-80c8-80ed-ffa23d4e609f", slug: "bio-assignment-1", title: "Assignment 1", course: "Biophilic Experiences", semester: "Spring 2025", date: "2025-01-24", notionUrl: "https://www.notion.so/185a0a665b0380c880edffa23d4e609f" },
  { id: "19ba0a66-5b03-807b-b44f-c23b887e9bd8", slug: "bio-assignment-2", title: "Assignment 2", course: "Biophilic Experiences", semester: "Spring 2025", date: "2025-02-15", notionUrl: "https://www.notion.so/19ba0a665b03807bb44fc23b887e9bd8" },
  { id: "1a8a0a66-5b03-80ec-aeae-c9a7fd66d843", slug: "bio-assignment-3", title: "Assignment 3 - Final Project", course: "Biophilic Experiences", semester: "Spring 2025", date: "2025-02-28", notionUrl: "https://www.notion.so/1a8a0a665b0380ecaeaec9a7fd66d843" },

  // Spring 2025 — Playful Communication of Serious Research
  { id: "184a0a66-5b03-8010-9d1a-dedc01c287c7", slug: "pcsr-week-1", title: "Week 1", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-01-23", notionUrl: "https://www.notion.so/184a0a665b0380109d1adedc01c287c7" },
  { id: "18ba0a66-5b03-8018-8c63-ceb7e2b34444", slug: "pcsr-week-2", title: "Week 2", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-01-30", notionUrl: "https://www.notion.so/18ba0a665b0380188c63ceb7e2b34444" },
  { id: "192a0a66-5b03-8074-9a00-cdaa09cb8bc7", slug: "pcsr-week-3", title: "Week 3", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-02-06", notionUrl: "https://www.notion.so/192a0a665b0380749a00cdaa09cb8bc7" },
  { id: "199a0a66-5b03-8033-8399-c2b7edb5d8dd", slug: "pcsr-week-4", title: "Week 4", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-02-13", notionUrl: "https://www.notion.so/199a0a665b0380338399c2b7edb5d8dd" },
  { id: "1a0a0a66-5b03-8027-a4ed-cf24b45b7506", slug: "pcsr-week-5", title: "Week 5", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-02-20", notionUrl: "https://www.notion.so/1a0a0a665b038027a4edcf24b45b7506" },
  { id: "1a7a0a66-5b03-8030-a4ad-fbaf003ce6d6", slug: "pcsr-week-6", title: "Week 6", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-02-27", notionUrl: "https://www.notion.so/1a7a0a665b038030a4adfbaf003ce6d6" },
  { id: "1b5a0a66-5b03-80e8-822d-f3fe069baf05", slug: "pcsr-week-7", title: "Week7", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-03-13", notionUrl: "https://www.notion.so/1b5a0a665b0380e8822df3fe069baf05" },
  { id: "1bca0a66-5b03-80a3-8b9d-d0582cfd7456", slug: "pcsr-week-8", title: "Week 8", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-03-20", notionUrl: "https://www.notion.so/1bca0a665b0380a38b9dd0582cfd7456" },
  { id: "1c7a0a66-5b03-8072-b0fb-d5eb84e78188", slug: "pcsr-dashboard", title: "Playful Communication Dashboard", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-03-31", notionUrl: "https://www.notion.so/1c7a0a665b038072b0fbd5eb84e78188" },
  { id: "1d8a0a66-5b03-80f0-aa62-dc3e5c3436dd", slug: "pcsr-week-idk", title: "Week - idk", course: "Playful Communication of Serious Research", semester: "Spring 2025", date: "2025-04-17", notionUrl: "https://www.notion.so/1d8a0a665b0380f0aa62dc3e5c3436dd" },

  // Spring 2025 — Synthetic Architectures
  { id: "184a0a66-5b03-8045-8bd7-e7012c9110d3", slug: "synth-week-1", title: "Week 1", course: "Synthetic Architectures", semester: "Spring 2025", date: "2025-01-23", notionUrl: "https://www.notion.so/184a0a665b0380458bd7e7012c9110d3" },
  { id: "2dfa0a66-5b03-801e-aa9f-f77a5229369f", slug: "synth-final", title: "Final", course: "Synthetic Architectures", semester: "Spring 2025", date: "2025-05-01", notionUrl: "https://www.notion.so/2dfa0a665b03801eaa9ff77a5229369f" },

  // Spring 2025 — Big LEDs
  { id: "1b4a0a66-5b03-806c-a7a2-c9684049ed5e", slug: "leds-week-1", title: "Week 1", course: "Big LEDs", semester: "Spring 2025", date: "2025-03-12", notionUrl: "https://www.notion.so/1b4a0a665b03806ca7a2c9684049ed5e" },
  { id: "1bba0a66-5b03-80b1-abc5-e3577ee72f8e", slug: "leds-week-2", title: "Week 2", course: "Big LEDs", semester: "Spring 2025", date: "2025-03-19", notionUrl: "https://www.notion.so/1bba0a665b0380b1abc5e3577ee72f8e" },
  { id: "1c9a0a66-5b03-8082-9dc5-dc9d938be342", slug: "leds-week-3", title: "Week 3", course: "Big LEDs", semester: "Spring 2025", date: "2025-04-02", notionUrl: "https://www.notion.so/1c9a0a665b0380829dc5dc9d938be342" },
  { id: "1f6a0a66-5b03-806f-968a-f6c662dfd652", slug: "leds-final", title: "Final", course: "Big LEDs", semester: "Spring 2025", date: "2025-05-17", notionUrl: "https://www.notion.so/1f6a0a665b03806f968af6c662dfd652" },

  // Fall 2024 — Physical Computing
  { id: "34991591-4118-4217-b53b-d2cfbe5241bd", slug: "pcomp-week-1", title: "Week 1", course: "Physical Computing", semester: "Fall 2024", date: "2024-09-08", notionUrl: "https://www.notion.so/3499159141184217b53bd2cfbe5241bd" },
  { id: "41dbf818-58e4-4455-ad5b-a2f484e120e5", slug: "pcomp-week-2", title: "Week 2", course: "Physical Computing", semester: "Fall 2024", date: "2024-09-16", notionUrl: "https://www.notion.so/41dbf81858e44455ad5ba2f484e120e5" },
  { id: "10aa0a66-5b03-8067-b6ff-e2c05319f482", slug: "pcomp-week-3", title: "Week 3", course: "Physical Computing", semester: "Fall 2024", date: "2024-09-23", notionUrl: "https://www.notion.so/10aa0a665b038067b6ffe2c05319f482" },
  { id: "119a0a66-5b03-80f2-af75-ed03acd68ea7", slug: "pcomp-week-5", title: "Week 5", course: "Physical Computing", semester: "Fall 2024", date: "2024-10-08", notionUrl: "https://www.notion.so/119a0a665b0380f2af75ed03acd68ea7" },
  { id: "127a0a66-5b03-80ca-9ab8-fcbfe638c469", slug: "pcomp-week-7", title: "Week 7 -Midterm project: Magic Crystal Ball", course: "Physical Computing", semester: "Fall 2024", date: "2024-10-22", notionUrl: "https://www.notion.so/127a0a665b0380ca9ab8fcbfe638c469" },
  { id: "135a0a66-5b03-8062-bc05-d62a9e498895", slug: "pcomp-week-8", title: "Week 8", course: "Physical Computing", semester: "Fall 2024", date: "2024-11-05", notionUrl: "https://www.notion.so/135a0a665b038062bc05d62a9e498895" },
  { id: "135a0a66-5b03-80ac-8649-f86ef9b9e265", slug: "pcomp-week-9", title: "Week 9", course: "Physical Computing", semester: "Fall 2024", date: "2024-11-05", notionUrl: "https://www.notion.so/135a0a665b0380ac8649f86ef9b9e265" },
  { id: "161a0a66-5b03-8083-8975-e0519f842367", slug: "pcomp-week-14", title: "Week 14 - Final Project", course: "Physical Computing", semester: "Fall 2024", date: "2024-12-19", notionUrl: "https://www.notion.so/161a0a665b0380838975e0519f842367" },

  // Fall 2024 — Hypercinema
  { id: "6f63b25d-82d2-487b-a92a-4ff14991a12e", slug: "hyper-week-1", title: "Week 1", course: "Hypercinema", semester: "Fall 2024", date: "2024-09-13", notionUrl: "https://www.notion.so/6f63b25d82d2487ba92a4ff14991a12e" },
  { id: "10aa0a66-5b03-809f-8e71-e159589dc63e", slug: "hyper-week-2", title: "Week 2", course: "Hypercinema", semester: "Fall 2024", date: "2024-09-23", notionUrl: "https://www.notion.so/10aa0a665b03809f8e71e159589dc63e" },
  { id: "110a0a66-5b03-8035-baaa-d63fd52938e3", slug: "hyper-week-3", title: "Week 3", course: "Hypercinema", semester: "Fall 2024", date: "2024-09-29", notionUrl: "https://www.notion.so/110a0a665b038035baaad63fd52938e3" },
  { id: "134a0a66-5b03-80f1-9aa4-df486042d2ba", slug: "hyper-week-7-8", title: "Week 7-8", course: "Hypercinema", semester: "Fall 2024", date: "2024-11-04", notionUrl: "https://www.notion.so/134a0a665b0380f19aa4df486042d2ba" },
  { id: "157a0a66-5b03-8006-b8b3-ddd2dcd56dd9", slug: "hyper-week-9", title: "Week 9: Synthetic Media Project", course: "Hypercinema", semester: "Fall 2024", date: "2024-12-09", notionUrl: "https://www.notion.so/157a0a665b038006b8b3ddd2dcd56dd9" },
  { id: "157a0a66-5b03-80df-8690-d64c74eb1309", slug: "hyper-finals", title: "Finals: Cornell Box", course: "Hypercinema", semester: "Fall 2024", date: "2024-12-09", notionUrl: "https://www.notion.so/157a0a665b0380df8690d64c74eb1309" },

  // Fall 2024 — Applications
  { id: "2dfa0a66-5b03-8060-b9fa-e11204d9bb30", slug: "apps-class-1", title: "Class 1", course: "Applications", semester: "Fall 2024", date: "2024-09-05", notionUrl: "https://www.notion.so/2dfa0a665b038060b9fae11204d9bb30" },
  { id: "2dfa0a66-5b03-8091-b9f2-f59a24bf30b4", slug: "apps-week-3", title: "Week 3", course: "Applications", semester: "Fall 2024", date: "2024-09-19", notionUrl: "https://www.notion.so/2dfa0a665b038091b9f2f59a24bf30b4" },

  // Fall 2024 — Visual Language
  { id: "2dfa0a66-5b03-8081-9b74-d24fb13438a6", slug: "vl-class-1", title: "Class 1", course: "Visual Language", semester: "Fall 2024", date: "2024-09-05", notionUrl: "https://www.notion.so/2dfa0a665b0380819b74d24fb13438a6" },
  { id: "2dfa0a66-5b03-80cf-bb4e-ecc4eae67d46", slug: "vl-class-2", title: "Class 2", course: "Visual Language", semester: "Fall 2024", date: "2024-09-12", notionUrl: "https://www.notion.so/2dfa0a665b0380cfbb4eecc4eae67d46" },
  { id: "2dfa0a66-5b03-80ed-822e-c74917ff44ec", slug: "vl-class-3", title: "Class 3", course: "Visual Language", semester: "Fall 2024", date: "2024-09-19", notionUrl: "https://www.notion.so/2dfa0a665b0380ed822ec74917ff44ec" },
  { id: "2dfa0a66-5b03-8088-9897-e9ec958836d9", slug: "vl-class-4", title: "Class 4", course: "Visual Language", semester: "Fall 2024", date: "2024-09-26", notionUrl: "https://www.notion.so/2dfa0a665b03808898970e9ec958836d9" },
  { id: "2dfa0a66-5b03-8028-935e-f4e21052a7a8", slug: "vl-class-5", title: "Class 5", course: "Visual Language", semester: "Fall 2024", date: "2024-10-03", notionUrl: "https://www.notion.so/2dfa0a665b038028935ef4e21052a7a8" },
  { id: "2dfa0a66-5b03-803f-996d-f38ca554d019", slug: "vl-class-6", title: "Class 6", course: "Visual Language", semester: "Fall 2024", date: "2024-10-10", notionUrl: "https://www.notion.so/2dfa0a665b03803f996df38ca554d019" },
  { id: "2dfa0a66-5b03-8060-9de2-e33e3957b369", slug: "vl-class-7", title: "Class 7", course: "Visual Language", semester: "Fall 2024", date: "2024-10-17", notionUrl: "https://www.notion.so/2dfa0a665b0380609de2e33e3957b369" },
  { id: "2dfa0a66-5b03-8008-9a91-c8428e12110e", slug: "vl-final", title: "Final", course: "Visual Language", semester: "Fall 2024", date: "2024-12-10", notionUrl: "https://www.notion.so/2dfa0a665b0380089a91c8428e12110e" },
];

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export const SEMESTERS = ["Spring 2026", "Fall 2025", "Spring 2025", "Fall 2024"] as const;
