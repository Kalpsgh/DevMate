import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import hero from "../assets/Hero.png"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
   <section className="bg-base-100">

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              Find Your Perfect
              <br />
              <span className="text-primary">
                Developer Match
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-base-content/70">
              Swipe through talented developers, match based on
              skills and interests, collaborate on hackathons,
              startups, open-source and side projects.
            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/login"
                className="btn btn-primary btn-lg"
              >
                Get Started
              </Link>

              <button className="btn btn-outline btn-lg">
                Learn More
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.35)]">

              <img
                src={hero}
                alt="Developers"
                className="w-full max-w-lg object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

<section className="py-16 bg-base-200">
  <div className="stats stats-vertical lg:stats-horizontal shadow mx-auto flex">

    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-value text-primary">1000+</div>
      <div className="stat-desc">Developers</div>
    </div>

    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-value text-secondary">500+</div>
      <div className="stat-desc">Successful Matches</div>
    </div>

    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-value text-accent">150+</div>
      <div className="stat-desc">Projects Built</div>
    </div>

  </div>
</section>

<section className="py-24 bg-base-100">

<h2 className="text-4xl font-bold text-center mb-12">
Why Choose DevMate?
</h2>

<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="card bg-base-200 shadow-xl">
<div className="card-body text-center">

<h2 className="text-5xl">🤝</h2>

<h2 className="card-title justify-center">
Find Developers
</h2>

<p>
Meet developers who share your interests,
skills and career goals.
</p>

</div>
</div>

<div className="card bg-base-200 shadow-xl">
<div className="card-body text-center">

<h2 className="text-5xl">🚀</h2>

<h2 className="card-title justify-center">
Collaborate
</h2>

<p>
Build startups,
hackathons,
open-source
and side projects.
</p>

</div>
</div>

<div className="card bg-base-200 shadow-xl">
<div className="card-body text-center">

<h2 className="text-5xl">💬</h2>

<h2 className="card-title justify-center">
Grow Together
</h2>

<p>
Practice interviews,
learn together
and level up your skills.
</p>

</div>
</div>

</div>

</section>

<section className="py-24 bg-base-200">

<h2 className="text-4xl font-bold text-center mb-16">
How It Works
</h2>

<div className="grid lg:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">

<div>
<h1 className="text-6xl">👤</h1>
<h2 className="font-bold mt-4">Create Profile</h2>
<p>Add your skills and interests.</p>
</div>

<div>
<h1 className="text-6xl">🔥</h1>
<h2 className="font-bold mt-4">Swipe Developers</h2>
<p>Discover talented developers.</p>
</div>

<div>
<h1 className="text-6xl">❤️</h1>
<h2 className="font-bold mt-4">Match</h2>
<p>Mutual interest creates a match.</p>
</div>

<div>
<h1 className="text-6xl">💻</h1>
<h2 className="font-bold mt-4">Build Together</h2>
<p>Collaborate on amazing projects.</p>
</div>

</div>

</section>

<section className="py-24 bg-base-100">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Everything You Need
      </h2>

      <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
        DevMate brings everything a developer needs to network,
        collaborate, and build amazing projects—all in one place.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">👨‍💻</div>
          <h2 className="card-title mt-3">Developer Profiles</h2>
          <p className="text-base-content/70">
            Showcase your skills, projects and experience.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">🔥</div>
          <h2 className="card-title mt-3">Swipe & Match</h2>
          <p className="text-base-content/70">
            Discover developers and connect with like-minded people.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">💬</div>
          <h2 className="card-title mt-3">Real-Time Chat</h2>
          <p className="text-base-content/70">
            Start conversations instantly after matching.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">🚀</div>
          <h2 className="card-title mt-3">Project Collaboration</h2>
          <p className="text-base-content/70">
            Build startups, hackathons and open-source projects together.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">📂</div>
          <h2 className="card-title mt-3">Portfolio Showcase</h2>
          <p className="text-base-content/70">
            Display your GitHub, resume and best work.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">🎯</div>
          <h2 className="card-title mt-3">Skill Matching</h2>
          <p className="text-base-content/70">
            Connect with developers who complement your skills.
          </p>
        </div>
      </div>

      {/* Card 7 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">📚</div>
          <h2 className="card-title mt-3">Interview Prep</h2>
          <p className="text-base-content/70">
            Practice DSA, system design and mock interviews together.
          </p>
        </div>
      </div>

      {/* Card 8 */}
      <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="card-body items-center text-center">
          <div className="text-5xl">🤝</div>
          <h2 className="card-title mt-3">Grow Together</h2>
          <p className="text-base-content/70">
            Learn, network and achieve your career goals together.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="hero py-24 bg-base-300 text-primary-content">

<div className="hero-content text-center">

<div>

<h1 className="text-5xl font-bold">
Ready to Find Your Coding Partner?
</h1>

<p className="py-6 text-lg">

Join thousands of developers already
building together with DevMate.

</p>

<button className="btn btn-neutral btn-lg">
Join DevMate 🚀
</button>

</div>

</div>

</section>
</>
  );
};

export default Hero;