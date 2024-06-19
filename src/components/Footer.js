function FooterComponent() {
  return (
      <div className="bg-body-tertiary">
        <div className="container">
          <div className="py-2 mt-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x mx-2"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x mx-2"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x mx-2"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x fa-2x mx-2"></i>
            </a>
          </div>
          <footer className="py-2 mt-3">
            <p className="text-center text-body-secondary">
              Copyright &copy; 2024 SMK TI Bazma
            </p>
          </footer>
        </div>
      </div>
  );
}

export default FooterComponent;
