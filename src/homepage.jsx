import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import HomeBox from './components/homeBox'
import StepsBox from './components/homeStepsBox';
import CategoryBox from './components/homeCategoryBox';
import Footer from './components/footer'
import './index.css'
import StepsIcon1 from './assets/stepsIcon1.png'
import StepsIcon2 from './assets/stepsIcon2.png'
import StepsIcon3 from './assets/stepsIcon3.png'
import Iphone from './assets/iphone.png'
import Ipad from './assets/Ipad.png'
import Android from './assets/android.png'
import Tablet from './assets/tablet.png'


function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HomeBox/>
      <div className="steps flex flex-col md:flex-row mx-4 md:mx-40 gap-8 md:gap-16">
    <StepsBox
        icon={StepsIcon1}
        title="Trusted Professionals"
        content="Rely on our team of professional technicians. We have a vast network of experts ready to assist you."
    />
    <StepsBox
        icon={StepsIcon2}
        title="Quick Turnaround"
        content="We aim to return your device as swiftly as possible, often completing repairs in 30 minutes or less."
    />
    <StepsBox
        icon={StepsIcon3}
        title="Free Diagnostics"
        content="Unsure about the issue with your device? Don't worry, we offer a complimentary diagnosis."
    />
</div>


      <h1 className='text-center mt-16 text-5xl font-semibold text-text'>All kind of repairs. For real.</h1>

      <div className="category flex flex-col md:flex-row mt-10 mx-4 md:mx-40 gap-8">
    <CategoryBox
        icon={Iphone}
        title="Iphone"
        content="Cracked screens, water damage, battery problems, and more."
    />
    <CategoryBox
        icon={Ipad}
        title="Ipad"
        content="Cracked screens, battery problems, and software issues."
    />
    <CategoryBox
        icon={Android}
        title="Android"
        content="We can do complex repairs like motherboard replacements."
    />
    <CategoryBox
        icon={Tablet}
        title="Tablet"
        content="Fast and cost-effective solutions for all kinds of tablets."
    />
</div>


<div className="lastBox flex flex-col shadow-allShadow rounded-2xl mt-8 md:mt-16 mx-4 md:mx-40 text-center py-8 md:py-10">
    <h1 className="text-3xl md:text-4xl font-semibold">
        Get Your Mobile Device Repaired Today!
    </h1>

    <p className="pt-4 text-xl md:text-2xl px-4 md:px-5 text-gray-400">
        We use only the highest quality parts and offer a wide range of repair services, from simple screen replacements to complex motherboard repairs. We also offer same-day repairs in most cases!
    </p>

    <Link to="/RepairPage">
        <button className="bg-button text-white mt-8 md:mt-12 py-3 px-16 md:px-20 text-lg md:text-xl rounded-full">
            Book a Repair
        </button>
    </Link>
</div>

      <Footer/> 

    </div>
    
  )
}

export default Homepage;
