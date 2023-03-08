import Image from "next/image";
import React from "react";
import { projects } from "~/data/projects";

function Projects() {
  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-10 text-center text-5xl font-bold text-indigo-500">
        Projects
      </h1>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className={`flex w-full flex-col items-center border-b-2 border-b-slate-500 py-16 last:border-0`}
          >
            <div className="mx-auto flex w-9/12 max-[640px]:flex-col sm:flex-col lg:flex-row">
              <div className="sm:mr-0 lg:mr-20">
                <h2 className="text-center text-2xl font-bold text-indigo-400">
                  {project.title}
                </h2>
                <p className="mt-5 w-fit max-w-2xl text-center text-sm text-white sm:mb-5">
                  {project.projectDescription}
                </p>
                <div className="text-center">
                  {project.techStack.map((tech) => {
                    return (
                      <span
                        className="mr-2 rounded-md bg-slate-700 px-2 py-2 text-sm text-white"
                        key={tech}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              <a
                href={project.liveLink}
                className="flex items-center justify-center duration-500 hover:scale-105"
              >
                <Image
                  src={project.projectImage}
                  style={{
                    height: "auto",
                    objectFit: "scale-down",
                    maxWidth: "350px",
                    overflow: "hidden",
                  }}
                  alt={`${project.title} Screengrab`}
                  className="mt-5 rounded-2xl"
                />
              </a>
            </div>
            <div className="mt-10 flex gap-5">
              <a target="_blank" rel="noreferrer" href={project.liveLink}>
                <button className="rounded-lg bg-indigo-500 py-3 px-4 text-white duration-150 hover:bg-indigo-700">
                  Live Site
                </button>
              </a>
              {project.sourceCodeLink ? (
                <a target="_blank" href={project.sourceCodeLink}>
                  <button className="rounded-lg bg-indigo-500 py-3 px-4 text-white duration-150 hover:bg-indigo-700">
                    Source Code
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
