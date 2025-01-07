import React from "react";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import zysk_profile from "../../assets/zysk_profile.jpeg";
import Image from "next/image";

const Blogposts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: blog1,
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: blog2,
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: blog3,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex justify-between mb-8">
          <div>
            <h2 className="text-base text-red-500 font-semibold mb-2">
              Our blog
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-gray-900">
              Lastest blog posts
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div>
            <button className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md font-semibold">
              View all posts
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-red-500 font-semibold">
                  {post.category}
                </p>
                <h4 className="text-lg font-bold mt-2 text-gray-900">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src={zysk_profile}
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8"></div>
      </div>
    </section>
  );
};

export default Blogposts;