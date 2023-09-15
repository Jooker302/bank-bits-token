import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    
      <section
        id='about'
        className={`flex flex-col md:flex-row items-center justify-center px-8`}
      >
        <img
          src="cover.jpeg"
          alt="About Us"
          className={`h-auto md:h-auto rounded-lg w-full md:w-2/5 md:mr-8 object-cover md:block`}
        />
        <div className="mt-4 md:mt-0">
          {/* <h2 className="text-4xl md:font-bold font-semibold mb-2 fire text-red-500">BURNDOGE</h2>
          <p className="font-semibold mb-2">
            <span className={`fire text-red-500`}>Burn Doge</span>: Where controlled scarcity meets community-driven growth.
            Together, we're rewriting the rules of crypto and redefining what it
            means to be a holder. Join us and become a part of something
            revolutionary.
          </p> */}
          <p className="mb-2">
            <p className={`font-bold text-xl md:text-2xl fire text-[#AB2231] py-3`}>About Us</p>
            
BankBit represents the future of finance, seamlessly merging the reliability of traditional banking with the transparency, security, and efficiency of blockchain technology. In this digital financial ecosystem, transactions are instant and accessible worldwide, transcending borders and bureaucratic barriers. BankBit's integration with blockchain fortifies financial assets, ensuring trust in every transaction. Beyond offering effortless fund management, investments, and asset control, BankBit's mission is to redefine financial inclusivity, empowering individuals and businesses to take charge of their finances with unmatched convenience and security. It's a transformative journey where the power of traditional banking converges with the limitless possibilities of blockchain, ushering in a new era of financial innovation.
          </p>
          {/* <p className="font-bold text-xl md:text-2xl fire text-red-500">Controlled Scarcity for Real Value</p> */}
          {/* <p className="mb-2">
            In a market saturated with countless tokens, Burn Doge stands out by
            implementing a deflationary model that truly rewards its community
            of holders. Through regular token burns, we systematically reduce
            the supply of Burn Doge tokens, instigating a controlled scarcity
            that inherently drives up their value. This unique approach not only
            fuels excitement but also cultivates a sense of unity among holders
            who recognize the potential for sustained growth. By marrying
            cutting-edge blockchain technology with the allure of scarcity,
            we're shaping a new era of crypto where value isn't just theoretical
            it's tangible.
          </p> */}
          {/* <p className="font-bold text-xl md:text-2xl fire text-red-500">Community and Innovation Unite</p>
          <p className="md:mb-0 mb-6">
            Beyond the innovative tokenomics, Burn Doge takes pride in fostering
            a thriving community that embodies the spirit of camaraderie and
            collaboration. Our vision is to create more than just a
            cryptocurrency; we're building a movement. Through engaging social
            platforms, interactive experiences, and charity initiatives, we're
            bringing together like-minded individuals who share our passion for
            cryptocurrency, blockchain, and pushing the boundaries of what's
            possible. Join us on this exciting journey as we combine the
            playfulness of the Dogecoin phenomenon with cutting-edge innovation,
            paving the way for a brighter crypto future.
          </p> */}
        </div>
      </section>
   
  )
}
