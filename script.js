// Exercise Database
const exerciseDatabase = [
  {
    "name": "Footwork - Arches #1",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 1)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #2",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 2)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #3",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 3)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #4",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 4)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #5",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 5)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #6",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 6)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Coordination #7",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 7)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Short Spine Massage #8",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 8)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage #9",
    "description": "Spinal articulation with long leg extension and control. (Variation 9)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Toes #10",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 10)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #11",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 11)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #12",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 12)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Tendon Stretch #13",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 13)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #14",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 14)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Leg Circles #15",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 15)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Frog #16",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 16)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination #17",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 17)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #18",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 18)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Long Spine Massage #19",
    "description": "Spinal articulation with long leg extension and control. (Variation 19)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Toes #20",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 20)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #21",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 21)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Heels #22",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 22)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #23",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 23)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #24",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 24)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Leg Circles #25",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 25)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #26",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 26)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination #27",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 27)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #28",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 28)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Long Spine Massage #29",
    "description": "Spinal articulation with long leg extension and control. (Variation 29)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Toes #30",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 30)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Arches #31",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 31)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #32",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 32)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #33",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 33)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #34",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 34)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #35",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 35)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #36",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 36)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Coordination #37",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 37)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #38",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 38)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage #39",
    "description": "Spinal articulation with long leg extension and control. (Variation 39)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Toes #40",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 40)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #41",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 41)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #42",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 42)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Tendon Stretch #43",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 43)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #44",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 44)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #45",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 45)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Frog #46",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 46)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination #47",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 47)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #48",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 48)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Long Spine Massage #49",
    "description": "Spinal articulation with long leg extension and control. (Variation 49)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Footwork - Toes #50",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 50)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #51",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 51)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Heels #52",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 52)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #53",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 53)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #54",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 54)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Leg Circles #55",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 55)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #56",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 56)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Coordination #57",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 57)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #58",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 58)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage #59",
    "description": "Spinal articulation with long leg extension and control. (Variation 59)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Toes #60",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 60)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Arches #61",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 61)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #62",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 62)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #63",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 63)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #64",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 64)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #65",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 65)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #66",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 66)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Coordination #67",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 67)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #68",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 68)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage #69",
    "description": "Spinal articulation with long leg extension and control. (Variation 69)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Toes #70",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 70)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #71",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 71)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Heels #72",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 72)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Tendon Stretch #73",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 73)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #74",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 74)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #75",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 75)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Frog #76",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 76)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination #77",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 77)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Short Spine Massage #78",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 78)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Long Spine Massage #79",
    "description": "Spinal articulation with long leg extension and control. (Variation 79)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Toes #80",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 80)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Footwork - Arches #81",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 81)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Heels #82",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 82)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #83",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 83)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #84",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 84)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Leg Circles #85",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 85)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #86",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 86)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Coordination #87",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 87)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #88",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 88)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Long Spine Massage #89",
    "description": "Spinal articulation with long leg extension and control. (Variation 89)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Toes #90",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 90)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Arches #91",
    "description": "Position feet over the footbar arches to activate the inner thighs. (Variation 91)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Adductors",
      "Quads"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Footwork - Heels #92",
    "description": "Feet on heels pressing out through the reformer to target hamstrings. (Variation 92)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Hamstrings",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "2 Red Springs"
  },
  {
    "name": "Footwork - Tendon Stretch #93",
    "description": "Calf raises on the reformer footbar to mobilize the ankles and calves. (Variation 93)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Calves",
      "Ankles"
    ],
    "bodyPosition": "Standing",
    "movementDirection": "Flexion/Extension",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Hundred #94",
    "description": "Core stabilization exercise with pumping arms and controlled breathing. (Variation 94)",
    "targetAreas": [
      "Core"
    ],
    "muscleGroups": [
      "Abs",
      "Obliques"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Stabilization",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring"
  },
  {
    "name": "Leg Circles #95",
    "description": "Circles with straps to strengthen hip mobility and core control. (Variation 95)",
    "targetAreas": [
      "Legs",
      "Core"
    ],
    "muscleGroups": [
      "Hip Flexors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Circular Motion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  },
  {
    "name": "Frog #96",
    "description": "Knees bent to straight position using straps, targeting inner thighs. (Variation 96)",
    "targetAreas": [
      "Glutes",
      "Core"
    ],
    "muscleGroups": [
      "Adductors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [
      "Straps"
    ],
    "level": "Beginner",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Coordination #97",
    "description": "Full body movement with arms and legs coordinated using straps. (Variation 97)",
    "targetAreas": [
      "Core",
      "Arms"
    ],
    "muscleGroups": [
      "Abs",
      "Shoulders"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Dynamic",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Short Spine Massage #98",
    "description": "Articulated spinal roll using straps to massage and mobilize spine. (Variation 98)",
    "targetAreas": [
      "Back",
      "Core"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Abs"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion",
    "props": [
      "Straps"
    ],
    "level": "Intermediate",
    "springSetting": "2 Red Springs + 1 Blue Spring"
  },
  {
    "name": "Long Spine Massage #99",
    "description": "Spinal articulation with long leg extension and control. (Variation 99)",
    "targetAreas": [
      "Core",
      "Legs"
    ],
    "muscleGroups": [
      "Spinal Erectors",
      "Glutes"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Flexion/Extension",
    "props": [
      "Straps"
    ],
    "level": "Advanced",
    "springSetting": "1 Red Spring"
  },
  {
    "name": "Footwork - Toes #100",
    "description": "Press through the toes on the footbar to work quads and calves. (Variation 100)",
    "targetAreas": [
      "Legs"
    ],
    "muscleGroups": [
      "Quads",
      "Calves"
    ],
    "bodyPosition": "Supine",
    "movementDirection": "Extension/Flexion",
    "props": [],
    "level": "Beginner",
    "springSetting": "1 Blue Spring + 1 Yellow Spring"
  }
]
// Function to generate and display selected filters
function generateClass() {
    let selectedItems = [];
    
    // Get selected filters (checkboxes)
    const checkboxes = document.querySelectorAll('.filter');
    
    // Loop through checkboxes and capture selected items
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    // Display selected filters in the summary section
    const selectionSummary = document.getElementById('selection-summary');
    if (selectedItems.length > 0) {
        selectionSummary.textContent = "You selected: " + selectedItems.join(', ');
    } else {
        selectionSummary.textContent = "No filters selected.";
    }

    // Filter exercises based on selected filters
    const filteredExercises = filterExercises(selectedItems);

    // Display filtered exercises
    displayExercises(filteredExercises);
}

// Function to filter exercises based on selected filters
function filterExercises(selectedFilters) {
    return exerciseDatabase.filter((exercise) => {
        return selectedFilters.every((filter) => 
            exercise.targetArea.includes(filter) || exercise.muscleGroup.includes(filter)
        );
    });
}

// Function to display filtered exercises
function displayExercises(exercises) {
    const exerciseSummary = document.getElementById('exercise-summary');
    exerciseSummary.innerHTML = ''; // Clear previous results

    if (exercises.length > 0) {
        exercises.forEach(exercise => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${exercise.name}</strong><br>
                                  Target Area: ${exercise.targetArea}<br>
                                  Muscle Group: ${exercise.muscleGroup}<br>
                                  Difficulty: ${exercise.difficulty}<br>
                                  Spring Level: ${exercise.springLevel}<br>
                                  `;
            exerciseSummary.appendChild(listItem);
        });
    } else {
        exerciseSummary.innerHTML = 'No exercises match the selected filters.';
    }
}

// Function to clear selections
function clearSelections() {
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll('.filter');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Clear selected filters and exercises
    const selectionSummary = document.getElementById('selection-summary');
    selectionSummary.textContent = "No filters selected.";

    const exerciseSummary = document.getElementById('exercise-summary');
    exerciseSummary.innerHTML = '';
}
