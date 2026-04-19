// note: for FILL/UNGRAM, the ordering isn't what you'd expect
const all_stimuli = [

       {
        "lexicalization": 1,
        "unique_id": 11,
        "condition": "human",
        "sentence": "The author consists of 10 passages",
        "item_type": "test"
    },
    {
        "lexicalization": 1,
        "unique_id": 12,
        "condition": "nonhuman",
        "sentence": "The new book consists of 10 passages",
        "item_type": "test"
    },
    {
        "lexicalization": 2,
        "unique_id": 21,
        "condition": "human",
        "sentence": "The girl contains all the marbles",
        "item_type": "test"
    },
    {
        "lexicalization": 2,
        "unique_id": 22,
        "condition": "nonhuman",
        "sentence": "The jar contains all the marbles",
        "item_type": "test"
    },
    {
        "lexicalization": 3,
        "unique_id": 31,
        "condition": "human",
        "sentence": "The baker is composed of ice cream and meringue",
        "item_type": "test"
    },
    {
        "lexicalization": 3,
        "unique_id": 32,
        "condition": "nonhuman",
        "sentence": "The baked Alaska is composed of ice cream and meringue",
        "item_type": "test"
    },
    {
        "lexicalization": 4,
        "unique_id": 41,
        "condition": "human",
        "sentence": "The dancer includes Spanish flamenco ",
        "item_type": "test"
    },
    {
        "lexicalization": 4,
        "unique_id": 42,
        "condition": "nonhuman",
        "sentence": "The intricate competition routine includes Spanish flamenco",
        "item_type": "test"
    },
    {
        "lexicalization": 5,
        "unique_id": 51,
        "condition": "human",
        "sentence": "The environmentalist runs on clean energy",
        "item_type": "test"
    },
    {
        "lexicalization": 5,
        "unique_id": 52,
        "condition": "nonhuman",
        "sentence": "The car runs on clean energy",
        "item_type": "test"
    },
    {
        "lexicalization": 6,
        "unique_id": 61,
        "condition": "human",
        "sentence": "The astronomer orbits the newly discovered planet",
        "item_type": "test"
    },
    {
        "lexicalization": 6,
        "unique_id": 62,
        "condition": "nonhuman",
        "sentence": "The moon orbits the newly discovered planet",
        "item_type": "test"
    },
    {
        "lexicalization": 7,
        "unique_id": 71,
        "condition": "human",
        "sentence": "The cartographer borders the coral reef",
        "item_type": "test"
    },
    {
        "lexicalization": 7,
        "unique_id": 72,
        "condition": "nonhuman",
        "sentence": "The new island borders the coral reef",
        "item_type": "test"
    },
    {
        "lexicalization": 8,
        "unique_id": 81,
        "condition": "human",
        "sentence": "The coach totals eight athletes",
        "item_type": "test"
    },
    {
        "lexicalization": 8,
        "unique_id": 82,
        "condition": "nonhuman",
        "sentence": "The dedicated team totals eight athletes",
        "item_type": "test"
    },
    {
        "lexicalization": 9,
        "unique_id": 91,
        "condition": "human",
        "sentence": "The girls house only international students",
        "item_type": "test"
    },
    {
        "lexicalization": 9,
        "unique_id": 92,
        "condition": "nonhuman",
        "sentence": "The new dormitory houses only international students",
        "item_type": "test"
    },
    {
        "lexicalization": 10,
        "unique_id": 101,
        "condition": "human",
        "sentence": "The man encloses the backyard",
        "item_type": "test"
    },
    {
        "lexicalization": 10,
        "unique_id": 102,
        "condition": "nonhuman",
        "sentence": "The old fence encloses the backyard",
        "item_type": "test"
    },
    {
        "lexicalization": 11,
        "unique_id": 111,
        "condition": "human",
        "sentence": "The queen spans the peaceful countryside",
        "item_type": "test"
    },
    {
        "lexicalization": 11,
        "unique_id": 112,
        "condition": "nonhuman",
        "sentence": "The mountain territories span the peaceful countryside",
        "item_type": "test"
    },
    {
        "lexicalization": 12,
        "unique_id": 121,
        "condition": "human",
        "sentence": "The chef features the brick oven",
        "item_type": "test"
    },
    {
        "lexicalization": 12,
        "unique_id": 122,
        "condition": "nonhuman",
        "sentence": "The kitchen features the brick oven",
        "item_type": "test"
    },
    {
        "lexicalization": 1001,
        "unique_id": 1001,
        "condition": "grammatical",
        "sentence": "The gopher chases the fearful rabbit",
        "item_type": "filler"
    },
    {
        "lexicalization": 1002,
        "unique_id": 1002,
        "condition": "grammatical",
        "sentence": "The musician plays the lovely violin",
        "item_type": "filler"
    },
    {
        "lexicalization": 1003,
        "unique_id": 1003,
        "condition": "grammatical",
        "sentence": "The woman washes the dirty dishes",
        "item_type": "filler"
    },
    {
        "lexicalization": 1004,
        "unique_id": 1004,
        "condition": "grammatical",
        "sentence": "The monkey eats the ripe banana",
        "item_type": "filler"
    },
    {
        "lexicalization": 1005,
        "unique_id": 1005,
        "condition": "grammatical",
        "sentence": "The wrecking ball demolishes the decrepit building",
        "item_type": "filler"
    },
    {
        "lexicalization": 1006,
        "unique_id": 1006,
        "condition": "grammatical",
        "sentence": "The horse chews the sweet apple",
        "item_type": "filler"
    },
    {
        "lexicalization": 1007,
        "unique_id": 1007,
        "condition": "grammatical",
        "sentence": "The librarian shelves the heavy book",
        "item_type": "filler"
    },
    {
        "lexicalization": 1008,
        "unique_id": 1008,
        "condition": "grammatical",
        "sentence": "The child plays the loud drums",
        "item_type": "filler"
    },
    {
        "lexicalization": 1009,
        "unique_id": 1009,
        "condition": "grammatical",
        "sentence": "The knight protects the guarded fortress",
        "item_type": "filler"
    },
    {
        "lexicalization": 1010,
        "unique_id": 1010,
        "condition": "grammatical",
        "sentence": "The editor mentors the stressed writer",
        "item_type": "filler"
    },
    {
        "lexicalization": 1011,
        "unique_id": 1011,
        "condition": "grammatical",
        "sentence": "The hammer smashes the fragile glass",
        "item_type": "filler"
    },
    {
        "lexicalization": 1012,
        "unique_id": 1012,
        "condition": "grammatical",
        "sentence": "The basket holds the expensive cheeses",
        "item_type": "filler"
    },
    {
        "lexicalization": 1013,
        "unique_id": 1013,
        "condition": "ungrammatical",
        "sentence": "The messy cleans student room the",
        "item_type": "filler"
    },
    {
        "lexicalization": 1014,
        "unique_id": 1014,
        "condition": "ungrammatical",
        "sentence": "The secret protects lock the safe",
        "item_type": "filler"
    },
    {
        "lexicalization": 1015,
        "unique_id": 1015,
        "condition": "ungrammatical",
        "sentence": "The wet heats dryer the clothes",
        "item_type": "filler"
    },
    {
        "lexicalization": 1016,
        "unique_id": 1016,
        "condition": "ungrammatical",
        "sentence": "The sore the athlete massages muscles",
        "item_type": "filler"
    },
    {
        "lexicalization": 1017,
        "unique_id": 1017,
        "condition": "ungrammatical",
        "sentence": "The steady the sails captain ship",
        "item_type": "filler"
    },
    {
        "lexicalization": 1018,
        "unique_id": 1018,
        "condition": "ungrammatical",
        "sentence": "The dangerous mixes chemicals scientist the",
        "item_type": "filler"
    },
    {
        "lexicalization": 1019,
        "unique_id": 1019,
        "condition": "ungrammatical",
        "sentence": "The difficult grades exam assistant the teaching",
        "item_type": "filler"
    },
    {
        "lexicalization": 1020,
        "unique_id": 1020,
        "condition": "ungrammatical",
        "sentence": "The valuable the shelf jewelry stores",
        "item_type": "filler"
    },
    {
        "lexicalization": 1021,
        "unique_id": 1021,
        "condition": "ungrammatical",
        "sentence": "The broken fixes truck engineer the",
        "item_type": "filler"
    },
    {
        "lexicalization": 1022,
        "unique_id": 1022,
        "condition": "ungrammatical",
        "sentence": "The dying the cable computer charges",
        "item_type": "filler"
    },
    {
        "lexicalization": 1023,
        "unique_id": 1023,
        "condition": "ungrammatical",
        "sentence": "The acclaimed honors artists gala the",
        "item_type": "filler"
    },
    {
        "lexicalization": 1024,
        "unique_id": 1024,
        "condition": "ungrammatical",
        "sentence": "The blank the painter canvas admires",
        "item_type": "filler"
    }
    ]
