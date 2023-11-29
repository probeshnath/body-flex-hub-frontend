import React from 'react'

const Footer = () => {
      //  get dynamic year
      const fullYear = () =>{
        return new Date().getFullYear()
    }
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className='max-w-7xl mx-auto'>
                <div className="footer grid grid-cols-2 lg:grid-cols-4 p-10 ">
                    <aside>
                       <img width="50" height="50" className='mx-auto' src="https://i.ibb.co/By7Q8hx/Gym-Logo-Graphics-1-28-removebg-preview-1.png" alt="logo" />
                        <p><h2 className='text-2xl text-center font-semibold'><span className='text-orange-300'>BodyFlex</span> Hub</h2>
                        <br />Providing reliable Body fitness since 2005</p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Fitness Resources</a>
                        <a className="link link-hover">Wellness Blog</a>
                        <a className="link link-hover">Trainer Profiles</a>
                        <a className="link link-hover">Membership Plans</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Trainers</a>
                        <a className="link link-hover">Gourms</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <div className='border-b border-gray-400'></div>
                <aside className='text-center  py-2 text-gray-300'>
                    <p>Copyright © {fullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    )
}

export default Footer