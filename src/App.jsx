
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./index.css";

const posts = [
  {
    id: "slow-mornings",
    category: "Lifestyle",
    title: "The beauty of slowing down",
    excerpt:
      "A gentle reminder that life doesn't always have to be rushed. Sometimes the best moments happen when we pause.",
    author: "Mubeen",
    date: "October 12, 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "travel-more",
    category: "Travel",
    title: "Little journeys, unforgettable memories",
    excerpt:
      "Discover why exploring new places, meeting people, and taking the scenic route can change your perspective.",
    author: "Mubeen",
    date: "October 9, 2026",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "simple-living",
    category: "Wellness",
    title: "Finding joy in the little things",
    excerpt:
      "From a favourite book to a quiet cup of tea, discover the simple pleasures that make ordinary days special.",
    author: "Mubeen",
    date: "October 6, 2026",
    read: "4 min read",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "creative-life",
    category: "Creativity",
    title: "Make room for your creative side",
    excerpt:
      "You don't have to be an artist to create something beautiful. Start small, stay curious, and enjoy the process.",
    author: "Mubeen",
    date: "October 3, 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="nav container">
        <Link to="/" className="brand">
          <span className="brand-icon">m.</span>
          <span>the little journal<span className="brand-dot">.</span></span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blog">Stories</Link>
          <Link to="/about">About</Link>
        </nav>

        <Link to="/blog" className="nav-button">
          Explore stories <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">m.</span>
          <span>the little journal<span className="brand-dot">.</span></span>
        </Link>
        <p>A little inspiration for your everyday life.</p>
        <span>© 2026 The Little Journal</span>
      </div>
    </footer>
  );
}

function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/post/${post.id}`} className="post-image">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="image-arrow">↗</span>
      </Link>

      <div className="post-content">
        <span className="category">{post.category}</span>
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>{post.read}</span>
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            A JOURNAL FOR THE EVERYDAY
          </div>

          <h1>
            Life is better
            <br />
            when you <em>notice</em>
            <br />
            the little things.
          </h1>

          <p className="hero-description">
            Stories, thoughtful ideas, and little reminders to help you
            slow down, find inspiration, and enjoy the journey.
          </p>

          <div className="hero-actions">
            <Link to="/blog" className="primary-button">
              Discover the stories <span>↗</span>
            </Link>
            <Link to="/about" className="text-button">
              Get to know us →
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-stars">✳</span>
            A small corner of the internet, made with care.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=90"
              alt="Sunlight filtering through a peaceful green forest"
            />
          </div>
          <div className="photo-label">
            <span>01 / A MOMENT TO PAUSE</span>
            <span>Take it slow ↗</span>
          </div>
          <div className="floating-note">
            <span className="flower">✿</span>
            <span>Find beauty in<br />the ordinary.</span>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-inner">
          <span>LIVE A LITTLE MORE MINDFULLY</span>
          <span className="intro-flower">✳</span>
          <span>READ SOMETHING MEANINGFUL</span>
          <span className="intro-flower">✳</span>
          <span>MAKE EVERYDAY COUNT</span>
        </div>
      </section>

      <section className="stories-section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">FRESH FROM THE JOURNAL</span>
            <h2>Stories worth <em>your time.</em></h2>
            <p>A few good things to read with your morning coffee.</p>
          </div>
          <Link to="/blog" className="view-all">
            View all stories <span>↗</span>
          </Link>
        </div>

        <div className="posts-grid">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-inner container">
          <span className="quote-mark">“</span>
          <p>
            You don't have to have it all figured out to enjoy where you are.
          </p>
          <span className="quote-caption">A LITTLE REMINDER FROM US TO YOU</span>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      `${post.title} ${post.excerpt} ${post.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesSearch && (category === "All" || post.category === category);
  });

  return (
    <main className="inner-page container">
      <div className="page-heading">
        <span className="eyebrow">THE STORY COLLECTION</span>
        <h1>A little something <em>to read.</em></h1>
        <p>Ideas, inspiration, and everyday stories for curious minds.</p>
      </div>

      <div className="blog-toolbar">
        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <input
          className="search-input"
          type="search"
          placeholder="Search stories..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search stories"
        />
      </div>

      {filteredPosts.length ? (
        <div className="posts-grid blog-grid">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          No stories found. Try a different search or category.
        </p>
      )}
    </main>
  );
}

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <main className="inner-page container">
        <h1>Story not found.</h1>
        <Link to="/blog" className="primary-button">Back to stories</Link>
      </main>
    );
  }

  return (
    <main className="article-page container">
      <Link to="/blog" className="back-link">← Back to all stories</Link>
      <div className="article-heading">
        <span className="category">{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <div className="article-meta">
          By {post.author} <span>·</span> {post.date} <span>·</span> {post.read}
        </div>
      </div>
      <img className="article-cover" src={post.image} alt={post.title} />
      <div className="article-body">
        <p className="article-lead">{post.excerpt}</p>
        <h2>Making space for what matters</h2>
        <p>
          There is something special about taking a moment to notice the
          world around us. We often move from one task to another, thinking
          about what comes next instead of enjoying where we are.
        </p>
        <p>
          Try giving yourself a little room to explore, reflect, and discover
          something new. It might be a quiet morning, a walk outdoors, or a
          conversation that stays with you long after it ends.
        </p>
        <blockquote>
          The little moments are not little when they make life meaningful.
        </blockquote>
        <h2>A thought to take with you</h2>
        <p>
          You don't need a perfect plan to begin. Start with one small thing
          that makes your day feel brighter, and let that be enough for now.
        </p>
      </div>
      <Link to="/blog" className="primary-button">Explore more stories ↗</Link>
    </main>
  );
}

function About() {
  return (
    <main className="about-page container">
      <div className="about-visual">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85"
          alt="A quiet woodland path surrounded by green trees"
        />
      </div>
      <div className="about-copy">
        <span className="eyebrow">A LITTLE ABOUT US</span>
        <h1>Hello there, <em>lovely to meet you.</em></h1>
        <p>
          Welcome to The Little Journal, a cozy corner for stories about
          everyday life, creativity, travel, and the things that make us feel
          a little more connected to the world.
        </p>
        <p>
          This blog is about slowing down, staying curious, and finding
          inspiration in places we might otherwise overlook.
        </p>
        <p>
          Make yourself comfortable, explore a story or two, and come back
          whenever you need a little inspiration.
        </p>
        <Link to="/blog" className="primary-button">Read our stories ↗</Link>
      </div>
    </main>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner container">
        <span className="eyebrow">A LITTLE NOTE FROM US</span>
        <h2>Good reads. <em>Good feelings.</em></h2>
        <p>
          Imagine a thoughtful little letter with fresh stories and ideas.
          That's what we'd love to share.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-label="Your email address"
          />
          <button type="submit">Count me in ↗</button>
        </form>
        <span className="newsletter-note">
          {subscribed
            ? "Thanks for your interest! Email delivery isn't connected yet."
            : "Just good things. No spam, ever."}
        </span>
      </div>
    </section>
  );
}

function AppLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
