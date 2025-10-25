import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/constant";
 

const Skills = () => {
  return (
    <section id="skills" className="w-full  my-6">
      {/* ========== Section Heading =================== */}

      <div className="text-center">
        <h2 className="text-5xl text-forground font-dm-serif">Skills</h2>
        <p className="text-muted-foreground w-full md:w-[600px] lg:w-[750px] xl:w-[850px] mx-auto mt-3">
          I&apos;ve been involved in web development for almost 4 years —
          gradually transitioning from basic static sites to full-stack modern
          web applications. My recent focus has been on deepening my skills and
          exploring more advanced technologies to build scalable, real-world
          projects.
        </p>
      </div>
      {/* ========== Section Heading =================== */}

      {/* Skills Categories */}
      <div className="relative container mx-auto px-4">
        {/* ===================== skills container ============================ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-4 md:gap-y-4 lg:gap-6 place-content-center">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border min-h-[300px] border-primary/30 rounded-xl shadow-2xl"
            >
              <h3 className="text-4xl text-textSecondary font-dm-serif text-center">
                {category.title}
              </h3>
              <CardContent className="mt-5 flex flex-row flex-wrap items-center justify-center gap-0.5 sm:gap-2">
                {category.skills.map((tech) => (
                  <div
                    key={tech.name}
                    className="border-2 border-forground   bg-[#fff4db] py-2 px-5 rounded-full mt-5"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="skill-icon">
                        <tech.icon size={20} className={`${tech.color}`} />
                      </span>
                      <p className="text-base text-muted-foreground">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;