import pics from './pics.jpg';
import info from './info.jpg'
import './App.css';

function App() {
  return (
    <div>
      
      <section className="introSection">
        <div className="container">
        <header>
            <a href="#">K. Griffith</a>
            <ul>
              <li><a href="#">APPEARANCES</a></li>
              <li><a href="#">BOOKS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
      </header>
      <hr />
      <div className="intro">
        <img src={pics} alt="" />
              <div className='infoPerson'>
                  <h1>Kayla Griffith</h1>
                  <p>Award Winning Author</p>
              </div>
      </div>
            
          </div>  
      </section>

      <section className='infoSectiom'>
       <div className="container">
             <div className="leftPart">
            <span className='span'>New Release</span>
              <h2>The Swan Isle <br /> (2035)</h2>
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s 
                easy. Just click “Edit Text” or double click me to add your own content
                and make changes to the font. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
               <h3>Order Now</h3>  
               <div className="btn">
                  <button>Amazon</button>
                  <button>Google</button>
                  <button>iBooks</button>
               </div>
          </div>
          <div className="rightPart">
              <img src={info} alt="" />
          </div>
        </div>
      </section>

      <section className='reviewsSection'>
        <div className="container">
            <h2>Praise & Reviews</h2>
            <div className="reviewsBlock">
                <div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                       It’s easy. Just click “Edit Text” or double click me to add your
                       own content and make changes to the font. I’m a great place 
                      for you to tell a story and let your users know a little more about you
                    </p>
                    <h4 >
                      ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                    </h4>
                    <hr />
                </div>
                <div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                       It’s easy. Just click “Edit Text” or double click me to add your
                       own content and make changes to the font. I’m a great place 
                      for you to tell a story and let your users know a little more about you
                    </p>
                    <h4>
                      ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                    </h4>
                    <hr />
                </div>
                <div>
                    <p>I'm a paragraph. Click here to add your own text and edit me.
                       It’s easy. Just click “Edit Text” or double click me to add your
                       own content and make changes to the font. I’m a great place 
                      for you to tell a story and let your users know a little more about you
                    </p>
                    <h4>
                      ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
                    </h4>
                    <hr />
                </div>
            </div>
        </div>
         
      </section>

      <section className='upcomingSection'>
        <div className="container">
            <h2>See Upcoming Appearances</h2>
            <p>I'm a paragraph. Click here to add your own <br /> text and edit me. It's easy.</p>
            <div className="upcomingBlocks">
              <div>
                <p>
                  January 18th 2035, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
                  </p>
                  <button>
                    Join
                  </button>
              </div>
              <br />
              <div>
                <p>
                  January 18th 2035, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
                  </p>
                  <button>
                    Join
                  </button>
              </div>
              <div>
                <p>
                  January 18th 2035, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
                  </p>
                  <button>
                    Join
                  </button>
              </div>
            </div>
            <div className="aboutPerson">
              <img src={pics} alt="" />
              <h2> About Kayla Griffith </h2>
              <p>I'm a paragraph. Click here to add your own text and edit me.
                 It’s easy. Just click “Edit Text” or double click me to add your 
                 own content and make changes to the font. I’m a great place for
                  you to tell a story and let your users know a little more about
                   you
              </p>
              <button>Read More</button>
            </div>
        </div>
      </section>

      <section className='footer'>
        <div className="container">
             © 2035 by K.Griffith. Powered and secured by Wix
        </div>
      </section>
    </div>
  );
}

export default App;
