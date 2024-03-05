import Image from 'next/image'
import MileyImage from '../public/miley-main.webp'

export default function MainContent() {
  return (
    <section
      className="custom:h-fit h-auto pb-12 custom:pb-4  w-full flex flex-col custom:px-10 px-4 custom:mt-8 mb-4 bg-[#f382bc] custom:rounded-xl  custom:border-x-2 custom:border-pink-500 border-pink-500/50 custom:border-b-2 border-y-2 custom:border-y-2 custom:justify-normal  justify-center relative"
      id="main-content"
      data-testid="main-content"
    >
      <h1 className="text-5xl  text-center p-4 font-semibold tracking-wider  z-20 textGradient  custom:mb-10">
        Tokyo Tour Guide
      </h1>

      {/* About Me/ Intro */}
      <div className="flex flex-col gap-10 custom:items-center relative">
        <div className="flex custom:flex-row flex-col w-full custom:max-w-[1000px] gap-6 custom:pb-0 custom:items-baseline items-center ">
          <div className="flex w-full max-w-[1000px] ">
            <Image
              src={MileyImage}
              alt="featured miley image"
              width={350}
              height={432}
              priority={true}
              placeholder="blur"
              className={`rounded custom:mr-auto custom:mx-0 mx-auto border-dashed border-4 border-pink-200 p-2 custom:min-w-[350px] max-h-[432px]  `}
            />
          </div>

          <p className="text-white  max-w-[600px] text-xl custom:text-2xl textShadow font-medium custom:my-auto z-30">
            Hey there! I&apos;m{' '}
            <span className="font-semibold textShadowNone textGradient">
              Miley
            </span>
            , a ninja apprentice, former Japanese idol, and voice actress with
            over 10 years of experience in the entertainment industry. The
            pandemic hit my work hard, prompting a change in direction. Two
            years ago, I dove into the vibrant community of Asakusa, drawn by a
            local&apos;s tale.
            <br />
            <br />
            <span className="font-semibold textShadowNone textGradient">
              Asakusa
            </span>
            , a beloved tourist spot, lacked young guides, and with the aging
            guide population, I saw an opportunity. Leveraging my background in
            stage shows, I aim to blend guiding skills with entertainment flair,
            introducing a fresh tour experience.
            <br />
            <br />
            My vision is to make guiding a sought-after profession, inspiring
            more young guides and contributing to sustainable tourism.
            Let&apos;s embark on this exciting journey together!
          </p>
        </div>
      </div>
    </section>
  )
}
