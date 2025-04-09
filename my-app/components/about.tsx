import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <Image 
              src="/profile_pic.JPG" 
              alt="Profile image from hackethon" 
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Education</h3>
            <div className="mb-6">
              <p className="text-gray-900 font-medium">University of North Carolina at Pembroke</p>
              <p className="text-gray-700">Bachelor of Science, Major: Computer Science, Minor: Cybersecurity</p>
              <p className="text-gray-600 text-sm mb-2">Expected May 2025</p>
              
              <p className="text-gray-900 font-medium mt-4">Wake Technical Community College</p>
              <p className="text-gray-700">Associates in Engineeing Transfer Program, Major: Computer Science</p>
              <p className="text-gray-600 text-sm">August 2022</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-gray-900">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "TypeScript", "React", "Express", "SpringBoot", "MongoDB", "AWS", "PyTorch", "TensorFlow", "Git", "Docker"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <p className="text-gray-600">
              I&apos;m actively involved in AI and CS clubs on campus and serve as a resident advisor. I&apos;m passionate about research, having worked on DNN models for blood clot detection in COVID patients and contributed to the Internet Routing Integrity Project with NSA Lab at NCSU.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
