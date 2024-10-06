export default function Testimonials() {
  return (
    <article
      className={`w-full lg:min-h-[400px] flex lg:flex-row flex-col items-center justify-around gap-8 px-4 lg:my-0 my-4 custom:pt-0 custom:before:border-none short-border pt-10 `}
    >
      <div className=" text-center basis-1/3 bg-[#f382bc] rounded-xl testimonialShadow max-w-[520px] relative ">
        <figure className="max-w-screen-md p-2 rounded-xl bg-gradient-to-r from-[#f382bc] to-[#ed3996]">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-200 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-semibold text-white line-clamp-4 ">
              &quot;I went on Miley&apos;s Ueno tour in March 2024 and had such
              a great time! Her tours are really fun + informative and you get
              to see and learn about places you probably wouldn&apos;t
              otherwise. Miley puts a lot of effort in and her personality is
              really nice and cheerful - her style of touring is awesome. I
              definitely recommend Smiley Walk! 😄&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 text-white">
            - Ricardo B.{' '}
            <a
              href="https://www.facebook.com/61558691166482/reviews/"
              className="ml-4 font-semibold"
            >
              via Smiley Walk
            </a>
          </figcaption>
        </figure>
      </div>

      <div className=" text-center basis-1/3 bg-[#f382bc] rounded-xl testimonialShadow max-w-[520px] relative">
        <figure className="max-w-screen-md p-2 rounded-xl bg-gradient-to-r from-[#f382bc] to-[#ed3996]">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-200"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-semibold text-white line-clamp-4 ">
              &quot;Miley is amazing!!!✨She is one of the nicest person
              I&apos;ve met in Japan!! We went on a full day tour of Asakusa
              with her and it was super fun. We have been to many parts of Tokyo
              but it was our first time in Asakusa and she knows so many people
              there! We learned so much about the area and it was so much fun!
              We loved it so much that we always try to stop by her bar and say
              hi when we are in town! It&apos;s my #1 recommendation in Japan is
              to do this!!!!! 🩷🩷🩷&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 text-white">
            Jiyoon Z.
            <a
              href="https://www.facebook.com/61558691166482/reviews/"
              className="ml-4 font-semibold"
            >
              via Smiley Walk
            </a>
          </figcaption>
        </figure>
      </div>

      <div className=" text-center basis-1/3 bg-[#f382bc] rounded-xl testimonialShadow  max-w-[520px] relative">
        <figure className="max-w-screen-md p-2 rounded-xl bg-gradient-to-r from-[#f382bc] to-[#ed3996]">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-200"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-semibold text-white line-clamp-4">
              &quot;I&apos;ve been to Tokyo many times, but the two Smiley Tours
              I went on were probably the most fun I ever had there, plus I
              learned a lot of things I hadn&apos;t known. Miley is incredibly
              upbeat and fun to be around, and you can tell that it&apos;s her
              natural personality, vs just an act for tourists. If you&apos;re
              there on a Friday night, be sure to check out her bar in Asakusa
              as well; besides her lovely personality, the tours/walks and her
              bar are all great ways to meet interesting people. Anywhere
              Miley&apos;s at is guaranteed to be a fun place to be as well 😄 I
              can&apos;t imagine visiting Tokyo in the future without also
              treating myself to a Smiley Experience! Go on a Smiley Walk
              yourself, you can come back and thank me later 😉&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 text-white">
            David E.
            <a
              href="https://www.facebook.com/61558691166482/reviews/"
              className="ml-4 font-semibold"
            >
              via Smiley Walk
            </a>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
