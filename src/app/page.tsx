"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./components/Navbar";
import { ThemedLayout } from "./components/ThemedLayout";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";

const Home = () => {
  return (
    <ThemedLayout>
      <main className="flex min-h-screen flex-col items-center p-pp-5">
        <div className="w-full max-w-2xl">
          <Navbar />
          <Image
            src="/brandon.jpg"
            alt="Brandon Main"
            width={112}
            height={112}
            priority
            suppressHydrationWarning
            className="mb-5 rounded-full"
          />
          <div className="space-y-4 leading-7">
            <div className="inline-block">
              <h2 className="inline-block mr-1">Hey there! I'm Brandon Main,</h2>
              <p className="inline">
                a software engineer based in Atlanta. I enjoy building software
                that people rely on to get real work done.
              </p>
            </div>
            <p>
              These days I work at{" "}
              <a
                href="https://www.qgenda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-50"
              >
                QGenda
              </a>
              , where we build software for healthcare teams. Some of it runs in emergency rooms and operating
              departments, so the people using it have far more important things
              to worry about than the app on their screen. That has shaped how I
              think about engineering. I care about building things that are
              dependable and genuinely useful, and I've learned to take
              performance and reliability seriously.
            </p>
            <p>
              Before QGenda, I spent a little over a year at{" "}
              <a
                href="https://www.orau.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-50"
              >
                Oak Ridge Associated Universities
              </a>
              , working as a federal contractor for the EPA. It was
              my introduction to building inside a large, regulated system, and
              it's where I got comfortable with backend development and cloud
              infrastructure. I came away with a lot more discipline about how I
              design and ship software.
            </p>
            <p>
              I studied Computer Science and Engineering at the University of
              Nevada, Reno. I'm at my best when I'm learning something new or
              finding a better way to do the work. If you'd like to talk about a
              project or just connect, you'll find my links below.
            </p>
          </div>
          <div className="mt-6 mb-8 flex gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/brandon-main/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brandon Main on LinkedIn"
              className="hover:opacity-50"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brandon Main's résumé (PDF)"
              className="hover:opacity-50"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
      </main>
    </ThemedLayout>
  );
};

export default Home;
