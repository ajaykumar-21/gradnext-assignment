const Footer = () => {
  return (
    <footer className="bg-orange-10 text-orange-900 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-4">GradNext</h3>
          <p className="text-sm text-orange-800">
            Helping aspiring consultants land top-tier offers through
            structured, feedback-driven preparation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-orange-700 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-orange-600 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-orange-600 transition duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#join-now"
                className="hover:text-orange-600 transition duration-200"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-orange-700 mb-4">Contact</h4>
          <p className="text-sm mb-2">
            📧{" "}
            <a
              href="mailto:support@gradnext.co"
              className="hover:text-orange-600"
            >
              gradnext789@gmail.com
            </a>
          </p>
          <p className="text-sm">📍 Bengaluru, India</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-orange-500 border-t border-orange-200 pt-6">
        © {new Date().getFullYear()} GradNext. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
