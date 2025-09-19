"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import dynamic from "next/dynamic";

import Image from "next/image";

import dashboardIcon1 from "@/public/dashboard-item1.png";
import dashboardIcon2 from "@/public/dashboard-item2.png";
import dashboardIcon3 from "@/public/dashboard-item3.png";
import dashboardIcon4 from "@/public/dashboard-item4.png";
import dashboardIcon5 from "@/public/dashboard-item5.png";
import dashboardIcon6 from "@/public/dashboard-item6.png";

import instructorImage1 from "@/public/Instructor-01.png";
import instructorImage2 from "@/public/Instructor-02.png";
import instructorImage3 from "@/public/Instructor-03.png";
import instructorImage4 from "@/public/Instructor-04.png";
import instructorImage5 from "@/public/Instructor-05.png";
import instructorImage6 from "@/public/Instructor-06.png";

import RecentCourse1 from "@/public/RecentCourse-1.png";
import RecentCourse2 from "@/public/RecentCourse-2.png";
import RecentCourse3 from "@/public/RecentCourse-3.png";
import RecentCourse4 from "@/public/RecentCourse-4.png";
import RecentCourse5 from "@/public/RecentCourse-5.png";
import RecentCourse6 from "@/public/RecentCourse-6.png";

const instructorsData = [
  {
    id: 1,
    name: "Kathryn Murphy",
    courses: 17,
    students: 2132,
    reviews: "4.8 (55K Students)",
    img: instructorImage1,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    courses: 6,
    students: 234,
    reviews: "4.8 (55K+ Students)",
    img: instructorImage2,
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    courses: 12,
    students: 113,
    reviews: "4.8 (55K+ Students)",
    img: instructorImage3,
  },
  {
    id: 4,
    name: "Ralph Edwards",
    courses: 13,
    students: 231,
    reviews: "4.8 (55K+ Students)",
    img: instructorImage4,
  },
  {
    id: 5,
    name: "Jane Cooper",
    courses: 8,
    students: 190,
    reviews: "4.8 (55K+ Students)",
    img: instructorImage5,
  },
  {
    id: 6,
    name: "Ralph Edwards",
    courses: 8,
    students: 190,
    reviews: "4.8 (55K+ Students)",
    img: instructorImage6,
  },
];

const RecentCourseData = [
  {
    id: 1,
    name: "Vuejs Courses",
    time: "5 hr 45 min",
    lesson: 10,
    students: 193,
    img: RecentCourse1,
  },
  {
    id: 2,
    name: "Swift Courses",
    time: "5 hr 45 min",
    lesson: 16,
    students: 193,
    img: RecentCourse2,
  },
  {
    id: 3,
    name: "Objective C Courses",
    time: "5 hr 45 min",
    lesson: 5,
    students: 542,
    img: RecentCourse3,
  },
  {
    id: 4,
    name: "NodeJS Courses",
    time: "5 hr 45 min",
    lesson: 20,
    students: 321,
    img: RecentCourse4,
  },
  {
    id: 5,
    name: "DJango Courses",
    time: "5 hr 45 min",
    lesson: 20,
    students: 321,
    img: RecentCourse5,
  },
  {
    id: 6,
    name: "CSS3 Courses",
    time: "5 hr 45 min",
    lesson: 7,
    students: 472,
    img: RecentCourse6,
  },
];

const CourseData = [
  {
    id: 1,
    name: "Node.js",
    Enroll: 45,
  },
  {
    id: 2,
    name: "React.js",
    Enroll: 60,
  },
  {
    id: 3,
    name: "Next.js",
    Enroll: 55,
  },
  {
    id: 4,
    name: "Express.js",
    Enroll: 35,
  },
  {
    id: 5,
    name: "MongoDB",
    Enroll: 40,
  },
  {
    id: 6,
    name: "TypeScript",
    Enroll: 50,
  },
  {
    id: 7,
    name: "JavaScript",
    Enroll: 50,
  },
];

export default function Main() {
  const MyChart = dynamic(() => import("../Components/MyChart.jsx"), {
    ssr: false,
  });
  return (
    <>
      <h2 className="font-semibold text-2xl pb-5">dashboard !!</h2>
      {/* Short Intro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">Total Courses</p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">2000+</h6>
            <Link
              href="/"
              className="text-[#066dca] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#066dca] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon1}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">
              Enrolled Courses
            </p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">900+</h6>
            <Link
              href="/"
              className="text-[#16a34a] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#16a34a] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon2}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">Active Courses</p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">100+</h6>
            <Link
              href="/"
              className="text-[#ff9f29] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#ff9f29] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon3}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">
              Completed Courses
            </p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">1000+</h6>
            <Link
              href="/"
              className="text-[#ff9f29] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#ff9f29] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon4}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">Total Student</p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">
              88,000+
            </h6>
            <Link
              href="/"
              className="text-[#066dca] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#066dca] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon5}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-start justify-between w-full p-5 gap-3 bg-white rounded-xl shadow-xl">
          <div>
            <p className="text-[#4f586d] text-lg font-normal">Total Earnings</p>
            <h6 className="pb-3 text-[#404a60] text-2xl font-medium">
              BDT 9,56,000.00
            </h6>
            <Link
              href="/"
              className="text-[#16a34a] underline text-xs font-medium cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="dashboard-icon flex items-center justify-center bg-[#16a34a] min-w-10 min-h-10 rounded-full cursor-pointer">
            <Image
              src={dashboardIcon6}
              alt="dashboard-icon"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Short Intro */}

      {/* Briefly Intro  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Instructor Information */}
        <div className="p-4 border border-[#dee2e6] bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#404a60]">
              Popular Instructor
            </h2>

            <a href="#" className="text-blue-500 text-xs">
              View All
            </a>
          </div>

          <div className="overflow-y-auto md:overflow-x-hidden rounded-xl">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#f3f8fe] text-xs text-[#404a60] ">
                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Instructor
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Courses
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Students
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Reviews
                  </th>
                </tr>
              </thead>

              <tbody>
                {instructorsData.map((instructor) => (
                  <tr
                    key={instructor.id}
                    className="border-t border-[#dee2e6] hover:bg-gray-50 transition-colors"
                  >
                    <td className="flex items-left gap-3 px-4 py-3">
                      <Image
                        src={instructor.img}
                        alt={instructor.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />

                      <span className="text-[#404a60] text-xs font-normal">
                        {instructor.name}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {instructor.courses}
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {instructor.students}
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500 pr-2"
                      />
                      {instructor.reviews}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Instructor Information */}

        {/* Recent Courses Information */}
        <div className="p-4 border border-[#dee2e6] bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#404a60]">
              Recent Courses
            </h2>

            <a href="#" className="text-blue-500 text-xs">
              View All
            </a>
          </div>

          <div className="overflow-y-auto md:overflow-x-hidden rounded-xl">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#f3f8fe] text-xs text-[#404a60] ">
                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Courses Title
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Hours
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Total Lesson
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Students
                  </th>
                </tr>
              </thead>

              <tbody>
                {RecentCourseData.map((recent) => (
                  <tr
                    key={recent.id}
                    className="border-t border-[#dee2e6] hover:bg-gray-50 transition-colors"
                  >
                    <td className="flex items-left gap-3 px-4 py-3">
                      <Image
                        src={recent.img}
                        alt={recent.name}
                        width={60}
                        height={60}
                        className="rounded-sm"
                      />

                      <span className="text-[#404a60] text-xs font-normal">
                        {recent.name}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {recent.time}
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {recent.lesson}
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {recent.students}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Recent Courses Information */}
      </div>
      {/* Briefly Intro  */}
      {/* Chart & course information */}
      <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-5">
        {/* Bar Chart */}
        <div className="bg-white w-full lg:w-[60%] p-4 border border-[#dee2e6] rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#404a60]">Chart</h2>
          </div>

          <MyChart />
        </div>
        {/* Bar Chart */}

        {/* Course Information */}
        <div className="p-4 w-full lg:w-[40%] border border-[#dee2e6] bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#404a60]">
              Popular Courses
            </h2>

            <a href="#" className="text-blue-500 text-xs">
              View All
            </a>
          </div>

          <div className="overflow-y-auto md:overflow-x-hidden rounded-xl">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#f3f8fe] text-xs text-[#404a60] ">
                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Courses Name
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Rating
                  </th>

                  <th className="px-4 py-3 text-left font-medium cursor-pointer">
                    Enrolled
                  </th>
                </tr>
              </thead>

              <tbody>
                {CourseData.map((course) => (
                  <tr
                    key={course.id}
                    className="border-t border-[#dee2e6] hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {course.name}
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500"
                      />
                    </td>

                    <td className="px-4 py-3 text-[#404a60] text-xs font-normal text-left">
                      {course.Enroll}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Course Information */}
      </div>
      {/* Chart & course information */}
    </>
  );
}
