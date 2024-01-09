import React from 'react'
import vg from "../assets/paray-samadhan-logo.png";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
import societyImage from "../assets/society.jpg";

const Home = () => {
  return (
    <>
        <div className="home" id="home">
          <main>
              <h1>সমাধান</h1>
              <p>আপনার সব সমস্যার সমাধান</p>
          </main>
        </div>

        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                একটি পরিচ্ছন্ন সমাজ একটি স্বাস্থ্যকর পরিবেশ গড়ে তোলে, সুস্থতার প্রচার করে এবং দূষণ এবং অস্বাস্থ্যকর অবস্থার সাথে সম্পর্কিত স্বাস্থ্য ঝুঁকি হ্রাস করে।
                একটি পরিচ্ছন্ন সমাজ স্থায়িত্ব, প্রাকৃতিক সম্পদ সংরক্ষণ এবং ভবিষ্যত প্রজন্মের জন্য বর্জ্য হ্রাস করার সম্মিলিত প্রতিশ্রুতি প্রদর্শন করে।
                সমাজে পরিষ্কার-পরিচ্ছন্নতা প্রচার করা শুধুমাত্র নান্দনিকতাকে উন্নত করে না বরং এর সদস্যদের মধ্যে সম্প্রীতি ও সুশৃঙ্খলতার বোধকে উন্নীত করে একটি ইতিবাচক মানসিকতাকেও গড়ে তোলে।
                </p>
            </div>
        </div>

        <div className="home5" id="servicing">
            
            <div>
              <img src={societyImage} alt="React" />
              <img src={societyImage} alt="React" />
              <img src={societyImage} alt="React" />
              <img src={societyImage} alt="React" />
              <img src={societyImage} alt="React" />
            </div>
        </div>

        <div className="home3" id="about">
        <div>
          <h1>আমরা কারা?</h1>
          <p>
          "সমাধান ফাউন্ডেশন" হল একটি দূরদর্শী সংস্থা যা সামগ্রিক সম্প্রদায়ের উদ্যোগের মাধ্যমে একটি উন্নত সমাজ গড়ে তোলার জন্য নিবেদিত। প্রান্তিক জনগোষ্ঠীর ক্ষমতায়নের লক্ষ্যে, তারা শিক্ষা, স্বাস্থ্যসেবা অ্যাক্সেসযোগ্যতা, পরিবেশগত স্থায়িত্ব এবং আর্থ-সামাজিক উন্নয়নের উপর দৃষ্টি নিবদ্ধ করে ব্যাপক কর্মসূচি বাস্তবায়ন করে। কৌশলগত অংশীদারিত্ব এবং তৃণমূল প্রচেষ্টার মাধ্যমে, ফাউন্ডেশন চ্যাম্পিয়ন ইনক্লুসিভিটি, মানবাধিকারের পক্ষে এবং উদ্ভাবনী প্রকল্পগুলির নেতৃত্ব দেয় যা ইতিবাচক পরিবর্তনকে অনুপ্রাণিত করে এবং ব্যক্তিদের জীবনকে উন্নীত করে, অবশেষে সকলের জন্য একটি সুরেলা এবং ন্যায়সঙ্গত সমাজের জন্য প্রচেষ্টা করে।
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>ব্র্যান্ড</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillAmazonCircle />
              <p>অ্যামাজন</p>
            </div>
            <div style={{animationDelay: "0.4s"}}>
              <AiFillYoutube />
              <p>ইউটিউব</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
              <AiFillInstagram />
              <p>ইনস্টাগ্রাম</p>
            </div>
            <div style={{animationDelay: "0.1s"}}>
              <AiFillGoogleCircle />
              <p>গুগল</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home