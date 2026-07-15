import React from 'react';

function Footer(props) {
    return (
       <footer className="bg-white border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                    {/*Top Grid*/}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

                        {/* Blog */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">StorySphere</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Latest Posts</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Categories</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Popular Articles</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Archive</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Writing Guide</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">SEO Tips</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog Tools</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                            <ul className="mt-4 space-y-3 text-sm">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row md:justify-between md:items-center">

                        <p className="text-xs text-gray-500">
                            © 2026 Blog App. All rights reserved.
                        </p>

                        {/* Socials */}
                        <div className="mt-4 md:mt-0 flex space-x-4">

                            {/* Twitter */}
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <span className="sr-only">Twitter</span>

                            </a>

                            {/* GitHub */}
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <span className="sr-only">GitHub</span>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                                <span className="sr-only">Instagram</span>

                            </a>
                        </div>
                    </div>

                </div>
            </footer>
    );
}

export default Footer;