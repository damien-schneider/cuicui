import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CuiCui",
  description:
    "Discover our library focused on copy-paste simplicity, enabling easy code changes, good practices, and diverse artistic styles.",
  keywords: [
    "copy-paste library",
    "code simplicity",
    "easy customization",
    "good coding practices",
    "diverse styles",
    "glasmorphism",
    "flat UI",
    "skeuomorphism",
    "neomorphism",
  ],
  openGraph: {
    title: "About Us - CuiCui",
    description:
      "Discover our library focused on copy-paste simplicity, enabling easy code changes, good practices, and diverse artistic styles.",
    url: "https://yourwebsite.com/about",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "CuiCui",
      },
    ],
    siteName: "CuiCui",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className=" [&_h2]:header-2 [&_h2]:mb-2 space-y-14">
        <section>
          <h2>Why this Library?</h2>
          <p className="body-1">
            Welcome to "CuiCui" library, where simplicity meets creativity! I
            believe in the power of copy-paste for learning and implementing
            code. By providing easy-to-use, clean, and well-documented
            components, I empower developers to quickly integrate and modify
            code to suit their needs.
          </p>
          <section className="dark:bg-neutral-900 bg-neutral-100 border border-neutral-500/10 rounded-lg py-2 px-3 mt-8">
            <h3 className="heading-5">And Why CuiCui?</h3>
            <p className="comment-1">
              The name "CuiCui" is can't be more explicit with its repetition of
              "UI". I believe that a good UI is the key to a delightful and
              efficient user experience. Additionally, "CuiCui" phonetically
              resembles "quick UI," emphasizing how easy it is to use.
              <br />
            </p>
            <h5 className="heading-6">And most of all</h5>
            <p className="comment-1">
              In French, "cui-cui" is an onomatopoeia for bird sounds, and...
              well, I think it sounds cute!
            </p>
          </section>
        </section>
        <section>
          <h2>Copy-Paste simplicity</h2>
          <p className="comment-1">
            Our library is designed to be as straightforward as possible. No
            hidden complexities, no unnecessary dependencies. Just pure, clean
            code that you can copy directly into your project. This approach not
            only saves time but also helps you understand what’s happening under
            the hood.
          </p>
        </section>
        <section>
          <h2>Easy customization</h2>
          <p className="comment-1">
            Customization is at the heart of our library. I make it incredibly
            simple to tweak and adjust our components. Whether you want to
            change a color, adjust spacing, or even overhaul the entire look,
            our code is structured to make these changes easy and intuitive.
          </p>
        </section>
        <section>
          <h2>Promoting good practices</h2>
          <p className="comment-1">
            I are committed to promoting good coding practices. Our components
            are built with clean, efficient, and optimized code. I avoid bloat
            and focus on delivering quality over quantity. Each component is a
            showcase of how to write effective and maintainable code.
          </p>
        </section>
        <section>
          <h2>Diverse artistic directions</h2>
          <p className="comment-1">
            Uniformity can be boring. That’s why I offer a variety of artistic
            styles, from glasmorphism and flat UI to skeuomorphism and
            neomorphism. Our library is a playground of visual design, allowing
            you to choose and combine styles to create something truly unique.
          </p>
        </section>
        <section>
          <h2>Dark & Light Mode</h2>
          <p className="comment-1">
            This high-quality component library supports both dark and light
            mode, ensuring that your components look great no matter the user’s
            preference. With a simple toggle, you can switch between modes and
            see your components adapt seamlessly to the new color scheme.
          </p>
        </section>
        <section>
          <h2>Micro interactions</h2>
          <p className="comment-1">
            Micro interactions are the small animations and effects that bring a
            website to life. Our library includes a range of micro interactions
            that add polish and sophistication to your components. From hover
            effects to loading animations, these subtle details make a big
            difference in the overall user experience. This is rarely seen in
            other libraries, but I believe it’s an essential part of creating a
            truly engaging UI.
          </p>
        </section>
      </main>
      <footer className="comment-1 mt-4">
        <p>
          &copy; 2024 CuiCui. All rights reserved. (on the site, I mean of
          course there is no right on copy pasted code)
        </p>
      </footer>
    </>
  );
}
