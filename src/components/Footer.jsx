const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="https://i.ibb.co/6gKnBsR/Block.png" alt="Logo"/>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <div className="w-6 h-6">
              <img src="https://i.ibb.co/sHZYRfh/X-Logo.png" alt="X (Twitter)" />
            </div>
            {/* X (Twitter) */}
            <div className="w-6 h-6">
              <img src="https://i.ibb.co/qyHztyW/Logo-Instagram.png" alt="Instagram" />
            </div>
            {/* Instagram */}
            <div className="w-6 h-6">
              <img src="https://i.ibb.co/6n9SxLR/Logo-You-Tube.png" alt="YouTube" />
            </div>
            {/* YouTube */}
            <div className="w-6 h-6">
              <img src="https://i.ibb.co/LpKcT61/LinkedIn.png" alt="LinkedIn" />
            </div>
            {/* LinkedIn */}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Use cases</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
