import { NextPage } from 'next';

export const Home: NextPage = () => {
  return (
    <div className="container max-w-xl mx-auto px-4 py-4 lg:pt-32">
      <div className="flex flex-wrap content-center">
        <div className="mb-12">
          <h1 className="text-xs tracking-wider font-bold uppercase mb-3">
            About Me
          </h1>
          <p className="mb-1 font-medium text-polar-night">
            Hi, I'm Julien. I'm a self-taught JavaScript Developer with more
            than 10 years of experiences and also an Indie Maker enthusiast.
          </p>
          <p className="mb-1 font-medium text-polar-night">
            Currently Lead Front End developer at{' '}
            <a
              href="https://www.leah.care"
              rel="noopener noreferrer"
              target="_blank"
              className="text-polar-night-300 hover:text-polar-night-600"
            >
              Leah
            </a>
            .
          </p>
        </div>

        <div className="w-full">
          <h1 className="text-xs tracking-wider font-bold uppercase mb-3">
            Projects
          </h1>
          <div className="w-full">
            <article className="bg-white shadow hover:shadow-lg transform duration-150 whitespace-no-wrap mb-4 rounded-lg">
              <a
                href="#"
                target="_self"
                title="Get What You Want"
                className="block px-6 py-4"
              >
                <div>
                  <h1 className="font-bold text-2xl text-polar-night">
                    Get What You Want
                  </h1>
                  <h2 className="mb-2 text-polar-night">
                    Find the perfect gift
                  </h2>
                  <span className="bg-snow-storm-300 rounded px-2 py-1 text-xs tracking-wide uppercase font-semibold flex-shrink-0">
                    <span className="text-polar-night-300">
                      Currently working on it
                    </span>
                  </span>
                </div>
              </a>
            </article>
            <article className="bg-white shadow hover:shadow-lg transform duration-150 whitespace-no-wrap mb-4 rounded-lg">
              <a
                href="https://www.coffeebrewing.co/"
                target="_blank"
                title="Coffee Brewing"
                className="block px-6 py-4"
              >
                <div>
                  <h1 className="font-bold text-2xl text-polar-night">
                    Coffee Brewing
                  </h1>
                  <h2 className="mb-2 text-polar-night">
                    Brew the perfect cup of coffee
                  </h2>
                  <span className="bg-snow-storm-300 rounded px-2 py-1 text-xs tracking-wide uppercase font-semibold flex-shrink-0">
                    <span className="text-polar-night-300">
                      https://www.coffeebrewing.co/
                    </span>
                  </span>
                </div>
              </a>
            </article>
            <article className="bg-white shadow hover:shadow-lg transform duration-150 whitespace-no-wrap mb-4 rounded-lg">
              <a
                href="https://www.shortcutly.com/"
                target="_blank"
                title="Shortcutly"
                className="block px-6 py-4"
              >
                <div>
                  <h1 className="font-bold text-2xl text-polar-night">
                    Shortcutly
                  </h1>
                  <h2 className="mb-2 text-polar-night">
                    Share your Apple Shortcuts easily
                  </h2>
                  <span className="bg-snow-storm-300 rounded px-2 py-1 text-xs tracking-wide uppercase font-semibold flex-shrink-0">
                    <span className="text-polar-night-300">
                      https://www.shortcutly.com/
                    </span>
                  </span>
                </div>
              </a>
            </article>
            <article className="bg-white shadow hover:shadow-lg transform duration-150 whitespace-no-wrap mb-4 rounded-lg">
              <a
                href="https://www.openmakers.co/"
                target="_blank"
                title="Open Makers"
                className="block px-6 py-4"
              >
                <div>
                  <h1 className="font-bold text-2xl text-polar-night">
                    Open Makers
                  </h1>
                  <h2 className="mb-2 text-polar-night">
                    A curated list of makers who opened their metrics
                  </h2>
                  <span className="bg-snow-storm-300 rounded px-2 py-1 text-xs tracking-wide uppercase font-semibold flex-shrink-0">
                    <span className="text-polar-night-300">
                      https://www.openmakers.co/
                    </span>
                  </span>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
