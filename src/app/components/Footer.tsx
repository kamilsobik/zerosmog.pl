export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <div className="text-sm text-black mr-4">
            &copy;zerosmog.pl. All rights reserved. Created by{" "}
            <a
              href="https://www.kamilsobik.pl"
              className=" justify-center items-center text-black hover:text-gray-900 bg-white hover:bg-white-100  transition duration-150 ease-in-out"
              target="_blank"
            >
              kamilsobik.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
