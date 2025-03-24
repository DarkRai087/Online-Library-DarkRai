const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description: "The story of Scout Finch, her brother Jem, and their father Atticus, set in the small town of Maycomb, Alabama during the Great Depression.",
      rating: 4.8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      popular: true
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      description: "A dystopian novel set in a totalitarian society where critical thought is suppressed under a totalitarian regime.",
      rating: 4.7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nineteen_Eighty-Four_cover_Soviet_1984.jpg/640px-Nineteen_Eighty-Four_cover_Soviet_1984.jpg",
      popular: true
    },
    {
      id: 3,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Non-Fiction",
      description: "A landmark volume in science writing by one of the great minds of our time.",
      rating: 4.5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a3/BriefHistoryTime.jpg",
      popular: false
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      description: "A science fiction novel that tells the story of Paul Atreides, whose family accepts stewardship of the planet Arrakis.",
      rating: 4.6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg",
      popular: true
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "The adventure of Bilbo Baggins as he journeys to the Lonely Mountain with a group of dwarves to reclaim their treasure from the dragon Smaug.",
      rating: 4.8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
      popular: true
    },
    {
      id: 6,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      description: "A romantic novel that follows the character development of Elizabeth Bennet, who learns about the repercussions of hasty judgments.",
      rating: 4.7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg",
      popular: false
    },
    {
      id: 7,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      category: "Fiction",
      description: "It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents but failed to kill Harry when he was just 15 months old. ",
      rating: 4.4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
      popular: false
    },
    {
      id: 8,
      title: "Neuromancer",
      author: "William Gibson",
      category: "Sci-Fi",
      description: "A science fiction novel that helped define the cyberpunk genre and popularized the concept of cyberspace.",
      rating: 4.5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg",
      popular: false
    },
    {
      id: 9,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description: "An epic high-fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
      rating: 4.9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
      popular: true
    },
    {
      id: 10,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      description: "A book about the history of Homo sapiens from the Stone Age to the 21st century.",
      rating: 4.6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Sapiens%2C_Lithuanian.jpg/800px-Sapiens%2C_Lithuanian.jpg",
      popular: true
    }
  ];
  
  const categories = [...new Set(books.map(book => book.category))];
  
  export { books, categories };