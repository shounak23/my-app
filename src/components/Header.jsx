import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <h1>সমাধান</h1>
        <main>
            <HashLink to={"/#home"}>বাড়ি</HashLink>
            <Link to={"/contact"}>যোগাযোগ</Link>
            <HashLink to={"/#about"}>সম্পর্কিত</HashLink>
            <HashLink to={"/#brands"}>ব্র্যান্ড</HashLink>
            <Link to={"/servicing"}>সার্ভিসিং</Link>
            <Link to={"/"}>অতিরিক্ত</Link>
        </main>
    </nav>
  )
};

export default Header