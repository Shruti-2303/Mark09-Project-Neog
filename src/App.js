import { useState } from 'react';
import './App.css';
const booksDictionary = {
  Romance : [
    {
      name : "Pride And Prejudice",
      ratings : "4.3/5",
      description : "Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness."
    },
    {
      name : "The Love Hypothesis",
      ratings : "4.3/5",
      description : "The Love Hypothesis by Ali Hazelwood (2021) follows a female scientist's comedic journey to true love that's fraught with lies, tears, and awkward moments. The book was an instant NY Times bestseller, a BuzzFeed Best Summer Read of 2021, and Goodreads Choice Awards finalist."
    },
    {
      name : "The Fault in our Stars",
      ratings : "4.2/5",
      description : "The Fault In Our Stars is a fabulous book about a young teenage girl who has been diagnosed with lung cancer and attends a cancer support group. Hazel is 16 and is reluctant to go to the support group, but she soon realises that it was a good idea. Hazel meets a young boy named Augustus Waters."
    }
  ],
  Fiction : [
    {
      name : "Our Missing Hearts",
      ratings : "4/5",
      description : "From the #1 bestselling author of Little Fires Everywhere, comes one of the most highly anticipated books of the year – the inspiring new novel about a mother’s unbreakable love in a world consumed by fear."
    },
    {
      name : "Poster Girl",
      ratings : "4/5",
      description : "Veronica Roth tells the story of a woman's desperate search for a missing girl after the collapse of the oppressive dystopian regime--and the dark secrets about her family and community she uncovers along the way"
    },
    {
      name : "Jackal",
      ratings : "3.7/5",
      description : "Jackal by Erin Adams is a creative and hard to put down horror/thriller about a small Appalachian town where black girls are going missing in the woods"
    }
  ],
  Selfhelp : [
    {
      name : "The Subtle Art of Not Giving a F*ck",
      ratings : "4/5",
      description : "The Subtle Art of Not Giving a F*ck argues that individuals should seek to find meaning through what they find to be important and only engage in values that they can control. Values (such as popularity) that are not under a person's control, are, according to the book, 'bad values'."
    },
    {
      name : "Atomic Habits",
      ratings : "4.3/5",
      description : "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time."
    },
    {
      name : "How to Win Friends and Influence People",
      ratings : "4.21/5",
      description : "How to Win Friends and Influence People is a 1936 self-help book written by Dale Carnegie. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. Carnegie had been conducting business education courses in New York since 1912."
    }
  ]
};

var categories = Object.keys(booksDictionary);
function App() {
  const [category, setCategory] = useState("Romance");

  function bookClickHandler(category){
    setCategory(category);
  }
  return (
    <div className="App">
      <h1>🍂 <span>read</span>alike 🍂</h1>

      <p>Checkout some bestsellers below. Select a genre to get started</p>

      <div>
        {categories.map((category) => (
          <button className='btn'onClick={() => bookClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>

      <hr/>

      <div>
        <ul>
          {booksDictionary[category].map((book) => (
            <li className='list-books'>
              <div className='name-book'>{book.name}</div>
              <div className='rating-book'>⭐<em>{book.ratings}</em></div>
              <div className='desc-book'>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
