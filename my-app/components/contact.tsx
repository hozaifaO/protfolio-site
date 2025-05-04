import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on research, discussing projects, or exploring potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 text-primary" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <p className="text-muted-foreground">howaisi.h@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mt-1 mr-4 text-primary" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <div className="bg-muted px-3 py-1 rounded text-sm text-muted-foreground">Redacted</div>
                  <p className="text-muted-foreground mt-1">This feature is coming later :)</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 text-primary" size={20} />
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground">North Carolina</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-foreground mb-2">Connect with me:</h4>
              <div className="flex flex-col space-y-2">
                <a href="https://github.com/hozaifaO" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  GitHub: github.com/hozaifaO
                </a>
                <a href="https://www.linkedin.com/in/hozaifa-o-a0b580266/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  LinkedIn: linkedin.com/in/hozaifa-o-a0b580266
                </a>
                <a href="https://www.datacamp.com/portfolio/hozaifa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  DataCamp: datacamp.com/portfolio/hozaifa
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send Me a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-border bg-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-border bg-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-border bg-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border bg-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
