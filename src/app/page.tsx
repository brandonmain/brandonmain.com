"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./components/Navbar";
import { ThemedLayout } from "./components/ThemedLayout";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

export default function Home() {
  return (
    <ThemedLayout>
      <main className="flex min-h-screen flex-col items-center p-pp-5">
        <Navbar />
        <div className="leading-7">
          <div className="inline-block">
            <h2 className="inline-block mr-1">Hey there! I'm Brandon Main,</h2>
            <p className="inline">
              a dedicated Software Engineer residing in Atlanta, GA. With a
              Bachelor of Science in Computer Science and Engineering from the
              University of Nevada, Reno, my career has been driven by a passion
              for technology and innovation.
            </p>
          </div>
          <p>
            Currently enhancing the tech landscape at QGenda, I specialize in
            full stack development. My expertise lies in using a diverse tech
            stack including C#, .NET, SQL, JavaScript/TypeScript, and React. My
            projects are not only about writing code; they play a vital role in
            supporting healthcare professionals in high-pressure environments,
            ensuring they have reliable, efficient tools at their disposal.
          </p>
          <p>
            Before my current role, I contributed significantly at Oak Ridge
            Associated Universities as a software developer. Working as a
            federal contractor for the U.S. Environmental Protection Agency, I
            developed a robust understanding of government projects, handling
            sensitive information and working within strict regulatory
            frameworks. My work involved extensive use of AWS services, Docker
            containerization, and REST API development, further broadening my
            technical skill set.
          </p>
          <p>
            My technical acumen encompasses a range of front-end and back-end
            technologies. I am proficient in front-end frameworks such as
            Angular and React and back-end development with ASP.NET Core and
            Node.js. My database knowledge spans SQL Server, SQLite, and
            Postgres, alongside a comprehensive understanding of AWS Cloud
            Technologies. This diverse skill set enables me to adapt to various
            project requirements and deliver high-quality solutions.
          </p>
          <p>
            Beyond my professional endeavors, I am deeply involved in the tech
            community. Whether it's exploring cutting-edge technologies or
            sharing knowledge through blogging and speaking engagements, I am
            always looking for ways to give back to the community that has
            fueled my growth. I am a firm believer in lifelong learning and
            continuously seek opportunities to expand my knowledge and skills.
          </p>
          <p>
            I am enthusiastic about connecting with like-minded professionals,
            sharing insights, and exploring collaborative opportunities. If
            you're interested in discussing technology, innovation, or potential
            projects, feel free to reach out. Let's work together to create
            technology solutions that make a real difference.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/brandon-main/"
          className="mt-3 mb-5 self-start text-2xl hover:opacity-50"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </main>
    </ThemedLayout>
  );
}
