import styles from './HomePage.module.css';

const homeData = [
  {
    title: '🎥 Welcome to the Movie Hub 🍿',
    text: "Buckle up, movie lovers! You've just stepped into the virtual haven for all things cinematic. We're thrilled to introduce you to a world where stories come to life, emotions are amplified, and imaginations run wild. And guess what? This text you're reading right now? It's lovingly crafted by none other than ChatGPT, your trusty guide through the reels and frames of film.",
  },
  {
    title: '🌟 Explore the Cinematic Universe 🌌',
    text: "Movies are more than just entertainment; they're a portal to different worlds, a glimpse into the human experience, and a canvas for creativity. Dive into our meticulously curated collection of articles, reviews, and recommendations covering every genre, era, and corner of the cinematic universe.",
  },
  {
    title: '🎬 From Blockbusters to Hidden Gems 🕵️‍♂️',
    text: "Whether you're craving the adrenaline rush of a summer blockbuster or seeking hidden cinematic gems that deserve the spotlight, we've got you covered. Our team of movie buffs and ChatGPT's algorithmic prowess work together to serve up the perfect movie suggestions, tailored to your tastes.",
  },
  {
    title: '🌎 A Global Cinematic Journey ✈️',
    text: "The magic of movies knows no bounds. Explore the rich tapestry of international cinema, from Bollywood's colorful extravaganzas to the subtle storytelling of European arthouse films. Join us on a globe-trotting adventure through the lens of different cultures.",
  },
  {
    title: '🗣️ Be Part of the Movie Conversation 🗨️',
    text: "Movies are best enjoyed when shared. Join our vibrant community of fellow film aficionados. Share your thoughts, engage in lively discussions, and discover new perspectives. Here, everyone's a critic, and your opinion matters.",
  },
  {
    title: '🎉 Movie Trivia, Behind-the-Scenes, and More! 🧙‍♂️',
    text: 'Want to know what went on behind the scenes of your favorite films? Or are you a trivia buff looking to impress your friends? Dive into our treasure trove of movie trivia, exclusive interviews with industry insiders, and behind-the-scenes glimpses that will leave you starstruck.',
  },
  {
    title: '🏆 Celebrating Excellence 🏆',
    text: "When the red carpet rolls out, we're there to bring you the latest on awards season. From the glitz and glamour of the Oscars to the artistic prestige of film festivals, we'll keep you in the know.",
  },
  {
    title: '📽️ Lights, Camera, Action! 📽️',
    text: "So, grab your virtual ticket, find your comfiest seat, and prepare for a cinematic journey like no other. We're your go-to destination for all things movies. Movie magic awaits, and it starts right here.",
  },
];

function HomePage() {
  return (
    <div className={styles.home}>
      {homeData.map(({ title, text }) => (
        <div key={title} className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      ))}

      <div className={styles.text}>
        With popcorn in hand and reels ready to roll, ChatGPT and the Movie Hub Team
      </div>
    </div>
  );
}
export default HomePage;
