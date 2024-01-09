import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>নাম</label>
                    <input type="text" required placeholder="নাম"/>
                </div>
                <div>
                    <label>ইমেইল</label>
                    <input type="text" required placeholder="abc@email.com"/>
                </div>
                <div>
                    <label>বার্তা</label>
                    <input type="text" required placeholder="আপনার প্রশ্ন সম্পর্কে আমাদের বলুন"/>
                </div>
                <button>জমা দিন</button>
            </form>
        </main>
    </div>
  )
}

export default Contact