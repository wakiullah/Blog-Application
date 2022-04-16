import React from "react";
import Authors from "./Authors";
import Catagories from "./Catagories";
import RecentPost from "./RecentPost";

export default function PostDetails() {
  return (
    <section className="mt-24">
      <header className=" text-gray-800 mx-auto mb-12 max-w-[45rem]">
        <h1 className="text-center font-cupper mb-4 font-bold text-[55px]">
          Why we think Simple is good for developers
        </h1>
      </header>
      <div className="container flex mx-auto ">
        <div className="hidden w-4/12 -mr-8 lg:block">
          <Authors />
          <Catagories />
          <RecentPost />
        </div>
        <div className="w-full pl-8 mt-4 lg:w-8/12">
          <div className="flex items-center mb-6 ">
            <div className="flex flex-shrink-0 mr-3">
              <a className="relative" href="#0">
                <span
                  className="absolute  top-0  -margin-[1px] left-0 right-0 bottom-0"
                  aria-hidden="true"
                >
                  <span className="absolute top-0 left-0 right-0 bottom-0 -m-[1px] bg-white rounded-full"></span>
                </span>
                <img
                  className="relative w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                  width="32"
                  height="32"
                  alt="Author 04"
                />
              </a>
            </div>
            <div>
              <span className="text-gray-600">By </span>{" "}
              <a className="font-bold tracking-wide" href="#0">
                Micheal Osman
              </a>
              <span className="text-gray-600"> · July 17, 2020</span>{" "}
            </div>
          </div>
          <hr className=" pt-[1px] border-0 w-16 h-[1px] mb-6 bg-gray-200 " />
          <div className="text-xl text-gray-600">
            <p
              id="introduction"
              className="mb-8"
              style={{ scrollMarginTop: "100px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
              amet{" "}
              <a className="cv hs" href="#0">
                how to manage anything
              </a>
              malesuada proin libero nunc consequat interdum varius. Quam
              pellentesque nec nam aliquam sem{" "}
              <strong className="ci cv">et tortor consequat</strong>.
              Pellentesque adipiscing commodo elit at imperdiet. Semper auctor
              neque vitae tempus quam pellentesque nec. Amet dictum sit amet
              justo donec enim diam.{" "}
              <strong className="ci cv">
                Varius sit amet mattis vulputate enim
              </strong>{" "}
              nulla aliquet porttitor. Odio pellentesque diam volutpat commodo
              sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.{" "}
            </p>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <figure className="mb-8">
              <img
                className="w-full rounded"
                src="https://images.pexels.com/photos/204265/pexels-photo-204265.jpeg?cs=srgb&dl=pexels-digital-buggu-204265.jpg&fm=jpg"
                width="768"
                height="432"
                alt="Blog single"
              />
            </figure>
            <h3
              id="general"
              className="mb-4 text-4xl font-bold leading-5 text-gray-800"
              style={{ scrollMarginTop: "100px" }}
            >
              General content
            </h3>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.{" "}
            </p>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend:{" "}
            </p>
            <ul className="mb-8 list-disc list-inside">
              <li className="mb-1">
                <strong className="text-gray-700">E-commerce</strong>: Better lorem
                ipsum generator.
              </li>
              <li className="mb-1">
                <strong className="text-gray-700">Booking</strong>: Lorem ipsum post
                generator.
              </li>
              <li className="mb-1">
                <strong className="text-gray-700">Retail</strong>: Generic dummy blog
                post generator.
              </li>
              <li className="mb-1">
                <strong className="text-gray-700">On-demand services</strong>: Lorem
                ipsum generator shortcode.
              </li>
            </ul>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend:{" "}
            </p>
            <p className="mb-8">
              <a
                className="inline-flex items-center text-xl font-semibold text-blue-600 hover:underline "
                href="#0"
              >
                <span>Read Simple on-demand services</span>{" "}
                <svg
                  className="flex-shrink-0 w-3 h-3 ml-2 text-gray-600 align-middle fill-current blog"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"></path>{" "}
                </svg>
              </a>
            </p>
            <p className="mb-8">
              Aenean sed adipiscing{" "}
              <em className="font-italic">
                diam donec adipiscing tristique risus nec feugiat
              </em>
              auctor urna nunc id cursus metus aliquam eleifend, arcu dictum
              varius duis at consectetur lorem donec massa sapien, sed risus
              ultricies tristique nulla aliquet.{" "}
            </p>
            <h4 className="mb-4 text-2xl font-semibold leading-5 text-gray-800 font-body">
              Why support for Business is important
            </h4>{" "}
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend.{" "}
            </p>
            <blockquote className="mb-8 text-gray-600">
              “ Mi in nulla posuere sollicitudin. Porttitor eget dolor morbi non
              arcu risus quis varius quam. Pharetra vel turpis nunc eget lorem
              dolor sed viverra. Semper auctor neque vitae tempus quam
              pellentesque nec. “{" "}
            </blockquote>
            <p className="mb-8">
              Et leo duis ut diam quam nulla porttitor porttitor lacus luctus
              accumsan tortor, lorem dolor sed viverra ipsum nunc aliquet
              bibendum enim eu augue ut lectus arcu bibendum at. Non sodales
              neque sodales ut etiam sit. Venenatis urna cursus eget nunc
              scelerisque viverra mauris in aliquam.
            </p>
            <p className="p-2 mb-8 border rounded bg-gray-50">
              <a className="mr-1 text-xl text-gray-600 underline" href="#0">
                Simple
              </a>
              is a sed viverra ipsum nunc aliquet bibendum enim eu augue ut
              lectus arcu bibendum at. Non sodales neque sodales ut etiam sit.
              Venenatis urna cursus eget nunc scelerisque viverra mauris in
              aliquam. Learn more{" "}
              <a className="text-gray-600 underline" href="#0">
                here
              </a>
              .
            </p>
            <h3
              id="additional"
              className="mb-4 text-3xl font-bold leading-5 text-gray-600 h3"
              style={{ scrollMarginTop: "100px" }}
            >
              Additional reading
            </h3>
            <p className="mb-8">
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend:
            </p>
            <p className="mb-8">
              <strong className="text-gray-600 ">
                Mi in nulla posuere sollicitudin:
              </strong>
            </p>
            <ul className="mb-8 list-disc list-inside">
              <li className="mb-1">
                <a className="text-gray-600 underline" href="#0">
                  E-commerce for etter lorem ipsum generator
                </a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 underline" href="#0">
                  Booking for lorem ipsum post generator
                </a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 underline" href="#0">
                  Retail for generic dummy blog post generator
                </a>
              </li>
              <li className="mb-1">
                <a className="text-gray-600 underline" href="#0">
                  On-demand services: Lorem ipsum generator shortcode
                </a>
              </li>
            </ul>
            <h3
              id="conclusion"
              className="mb-4 text-4xl font-bold text-gray-600"
              style={{ scrollMarginTop: "100px" }}
            >
              Conclusion
            </h3>
            <p>
              Sollicitudin ac orci phasellus egestas tellus rutrum telluse nim
              ut tellus elementum sagittis vitae et leo duis egestas purus
              viverra accumsan in nisl nisi scelerisquep ellentesque habitant
              morbi tristique, senectus et netus et dolor purus non enim
              praesent elementum facilisis leol, aoreet suspendisse interdum
              consectetur libero id faucibus.{" "}
            </p>
            <div>
              <hr className=" border-0 w-full h-[1px] mt-8 li rm bg-gray-200 x" />{" "}
              <div className="mt-8">
                Interested in more tips like this? Check out{" "}
                <a className="text-gray-600 underline" href="#0">
                  Introducing the Testing Field Guide
                </a>
                .
              </div>
              <div className="mt-5">
                <a
                  className="inline-flex items-center text-base text-purple-500 uu lz cb ci pr"
                  href="blog.html"
                >
                  <svg
                    className="flex-shrink-0 w-3 h-3 mr-2 text-gray-600 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z"></path>{" "}
                  </svg>
                  <span>Back to the blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
