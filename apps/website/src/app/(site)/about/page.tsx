import { env } from "#/src/env";
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
      "Learn more about the only UI library you need, simply copy-paste, use best React tools, best practices, and more creative components.",
    url: `${env.NEXT_PUBLIC_SITE_URL}/about`,
    type: "website",
    siteName: "CuiCui",
  },
};

const aboutContent = {
  libraryIntroduction: {
    title: "Why this Library?",
    text: `Welcome to "CuiCui" library, where simplicity meets creativity! I believe in the power of copy-paste for learning and implementing code. By providing easy-to-use, clean, and well-documented components, I empower developers to quickly integrate and modify code to suit their needs.`,
    subSection: {
      title: "And Why CuiCui?",
      text: `The name "CuiCui" is can't be more explicit with its repetition of "UI". I believe that a good UI is the key to a delightful and efficient user experience. Additionally, "CuiCui" phonetically resembles "quick UI," emphasizing how easy it is to use.`,
      finalNote: `In French, "cui-cui" is an onomatopoeia for bird sounds, and... well, I think it sounds cute!`,
    },
  },
  sections: [
    {
      title: "Copy-Paste simplicity",
      text: "Our library is designed to be as straightforward as possible. No hidden complexities, no unnecessary dependencies. Just pure, clean code that you can copy directly into your project. This approach not only saves time but also helps you understand what’s happening under the hood.",
    },
    {
      title: "Easy customization",
      text: "Customization is at the heart of our library. I make it incredibly simple to tweak and adjust our components. Whether you want to change a color, adjust spacing, or even overhaul the entire look, our code is structured to make these changes easy and intuitive.",
    },
    {
      title: "Promoting good practices",
      text: "I am committed to promoting good coding practices. Our components are built with clean, efficient, and optimized code. I avoid bloat and focus on delivering quality over quantity. Each component is a showcase of how to write effective and maintainable code.",
    },
    {
      title: "Diverse artistic directions",
      text: "Uniformity can be boring. That’s why I offer a variety of artistic styles, from glasmorphism and flat UI to skeuomorphism and neomorphism. Our library is a playground of visual design, allowing you to choose and combine styles to create something truly unique.",
    },
    {
      title: "Dark & Light Mode",
      text: "This high-quality component library supports both dark and light mode, ensuring that your components look great no matter the user’s preference. With a simple toggle, you can switch between modes and see your components adapt seamlessly to the new color scheme.",
    },
    {
      title: "Micro interactions",
      text: "Micro interactions are the small animations and effects that bring a website to life. Our library includes a range of micro interactions that add polish and sophistication to your components. From hover effects to loading animations, these subtle details make a big difference in the overall user experience. This is rarely seen in other libraries, but I believe it’s an essential part of creating a truly engaging UI.",
    },
    {
      title: "Learning how the components work under the hood",
      text: `I believe that understanding how a component works is essential for any developer. That’s why I provide detailed documentation for each component, explaining how it’s built and how you can customize it. By diving into the code, you can learn new techniques, improve your skills, and gain a deeper understanding of front-end development.

            And this is also the reason why I don't create a library but only provide copy paste code. I want developers to understand what you are using and how it works.`,
    },
  ],
  footer: {
    text: "© 2024 CuiCui. All rights reserved. (on the site, I mean of course there is no right on copy pasted code)",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className=" [&_h2]:header-2 space-y-14 [&_h2]:mb-2">
        <section>
          <h2>{aboutContent.libraryIntroduction.title}</h2>
          <p className="body-1">{aboutContent.libraryIntroduction.text}</p>
          <section className="mt-8 rounded-lg border border-neutral-500/10 bg-neutral-100 px-3 py-2 dark:bg-neutral-900">
            <h3 className="header-5">
              {aboutContent.libraryIntroduction.subSection.title}
            </h3>
            <p className="comment-1">
              {aboutContent.libraryIntroduction.subSection.text}
            </p>
            <h5 className="header-6">And most of all</h5>
            <p className="comment-1">
              {aboutContent.libraryIntroduction.subSection.finalNote}
            </p>
          </section>
        </section>

        {aboutContent.sections.map((section, _index) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <hr className="mt-2 mb-4 border-neutral-500/30" />
            <p className="comment-1">{section.text}</p>
          </section>
        ))}
      </main>
      <footer className="comment-1 mt-20">
        <hr className="mb-4 border-neutral-500/30" />
        <p>{aboutContent.footer.text}</p>
      </footer>
    </>
  );
}
