// components/Footer.js

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-wrap bg-white-800 p-4 p-2 pl-5 pr-5 ml-4 mr-3">
                <div className="w-full sm:w-1/2 md:w-1/6 mb-4">
                    <h3 className="text-lg font-bold mb-2 text-#172332">COMPANY</h3>
                    <div className="mt-2">
                        <a className="block mb-2 text-#172332">About us</a>
                        <a className="block mb-2 text-#172332">Contact us</a>
                        <a className="block mb-2 text-#172332">FAQs</a>
                    </div>

                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-4">
                    <h3 className="text-lg font-bold mb-2 text-#172332">Resources</h3>
                    <div className="mt-2">
                        <a className="block mb-2 text-#172332">Returns & Exchanges</a>
                        <a className="block mb-2 text-#172332">Privacy Policy</a>
                        <a className="block mb-2 text-#172332">Terms & Conditions</a>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-4">
                    <h3 className="text-lg font-bold mb-2 text-#172332">Clothing care</h3>
                    <div className="mt-2">
                        <a className="block mb-2 text-#172332">Washing guides</a>
                        <a className="block mb-2 text-#172332">Size guides</a>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/6 mb-4">
                    <h3 className="text-lg font-bold mb-2 text-#172332">Social Media</h3>
                    <div className="mt-2">
                        <a className="block mb-2 text-#172332">Instagram</a>
                        <a className="block mb-2 text-#172332">Facebook</a>
                        <a className="block mb-2 text-#172332">Twitter</a>
                    </div>
                </div>
                <div className="w-[344px]  md:w-1/3 mb-4 items-center">

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Email"
                            className="bg-white-300 w-[400px] border border-gray-300 px-4 py-2 mt-2 mr-2 focus:outline-none"
                        />

                        <button className="absolute h-[40px] mt-2 mr-12 inset-y-0 right-0 bg-white-300 px-4 py-2 rounded-md focus:outline-none">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm mt-3 text-#172332">
                        Sign up to stay up to date on the latest from KEON and receive exclusive
                        promotions, private sales and news. By subscribing, you confirm you have
                        read and accepted our <u>privacy policy</u>
                    </p>
                </div>

            </div>
            <div className="flex flex-wrap justify-center bg-white-800 p-4">
                <h6 className="text-lg font-bold mb-2 text-center">© 2023 KEON All rights reserved</h6>
            </div>

        </footer>
    );
};

export default Footer;
