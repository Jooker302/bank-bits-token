import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Partners</h2>
            {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="/dxsale.png" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="https://dx.app">DxSale</a>
              </div>
            </div>

{/* 4 */}

<div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="600">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="#team">1inch</a>
              </div>
            </div>


            {/* 5 */}


            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="data:image/png;base64,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" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="#team">BNB Chain</a>
              </div>
            </div>

            {/* 2 */}

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="#team">ARB</a>
              </div>
            </div>


            {/* 3 */}

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="#team">Coinbase</a>
              </div>
            </div>


            


            {/* 6 */}


            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="1000">
              <div>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              {/* <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote> */}
              <img src="https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1" alt="" />
              <div className="text-gray-700 font-medium flex justify-center mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic"></cite>  */}
                <a className="text-white text-center hover:text-red-500 transition duration-150 ease-in-out" href="#team">Chain Link</a>
              </div>
            </div>



            {/* 2nd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-red-500 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div> */}

            {/* 3rd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-red-500 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}
